import { Draft } from "@/features/messages/types";
import { makeUniqueId } from "@apollo/client/utilities";
import { useState, createContext, useContext, ReactNode } from "react";

const draftsInit: Draft[] = JSON.parse(localStorage.getItem("initDrafts") || "[]")

// Create Context Object
export const AppContext = createContext({
    drafts: draftsInit,
    addDraft: (draft: Draft) => { },
    updateDraft: (draft: Draft) => { },
    removeDraft: (draft: Draft) => { },
});

interface Props {
    children?: ReactNode;
}

// Create a provider for components to consume and subscribe to changes
export function DraftsProvider(props: Props) {
    const { children } = props
    const [drafts, setDrafts] = useState<Draft[]>(draftsInit);

    const addDraft = (draft: Draft) => {
        const messageId = makeUniqueId("drafts")
        const newDraft = { ...draft, messageId }
        const currDrafts = [...drafts, newDraft]
        localStorage.setItem("initDrafts", JSON.stringify(currDrafts))
        setDrafts(currDrafts)
    }
    const updateDraft = (draft: Draft) => {
        const i = drafts.findIndex(d => d.messageId === draft.messageId)
        const currDrafts = [...drafts]
        currDrafts[i] = draft
        localStorage.setItem("initDrafts", JSON.stringify(currDrafts))
        setDrafts(currDrafts)
    }
    const removeDraft = (draft: Draft) => {
        const currDrafts = [...drafts].filter(d => d.messageId !== draft.messageId)
        localStorage.setItem("initDrafts", JSON.stringify(currDrafts))
        setDrafts(currDrafts)
    }



    return (
        <AppContext.Provider value={{ drafts, addDraft, removeDraft, updateDraft }}>
            {children}
        </AppContext.Provider>
    );
};
export const useDraftContext = () => useContext(AppContext);