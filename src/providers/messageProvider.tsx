import { UnsentMessage } from "@/features/messages/types";
import { makeUniqueId } from "@apollo/client/utilities";
import { useState, createContext, useContext, ReactNode } from "react";

const unsentMessagesInit: UnsentMessage[] = [
    // { text: "error message", userId: "Russell", datetime: "2022-05-14T12:31:03.18346Z", channelId: "1", messageId: "test" }
]

// Create Context Object
export const AppContext = createContext({
    unsentMessages: unsentMessagesInit,
    addUnsentMessage: (message: UnsentMessage) => { },
    removeUnsentMessage: (message: UnsentMessage) => { },
});

interface Props {
    children?: ReactNode;
}

// Create a provider for components to consume and subscribe to changes
export function MessageProvider(props: Props) {
    const { children } = props
    const [unsentMessages, setUnsentMessages] = useState<UnsentMessage[]>(unsentMessagesInit);
    const addUnsentMessage = (message: UnsentMessage) => {
        const messageId = makeUniqueId("unsent-message")
        const newMessage = { ...message, messageId }
        const currUnsentMessage = [...unsentMessages, newMessage]
        setUnsentMessages(currUnsentMessage)
    }
    const removeUnsentMessage = (message: UnsentMessage) => {
        const currUnsentMessage = [...unsentMessages].filter(m => m.messageId !== message.messageId)
        console.log({ currUnsentMessage });

        setUnsentMessages(currUnsentMessage)

    }
    return (
        <AppContext.Provider value={{ unsentMessages, addUnsentMessage, removeUnsentMessage }}>
            {children}
        </AppContext.Provider>
    );
};
export const useMessageContext = () => useContext(AppContext);