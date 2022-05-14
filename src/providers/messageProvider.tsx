import { Message } from "@/features/messages/types";
import { useState, createContext, useContext, ReactNode } from "react";

const messagesInit: Message[] = []

// Create Context Object
export const AppContext = createContext({
    messages: messagesInit,
    updateMessages: (messages: Message[]) => { },
});

interface Props {
    children?: ReactNode;
}

// Create a provider for components to consume and subscribe to changes
export function MessageProvider(props: Props) {
    const { children } = props
    const [messages, setMessages] = useState<Message[]>(messagesInit);
    const updateMessages = (newMessages: Message[]) => {
        setMessages(newMessages)
    }

    return (
        <AppContext.Provider value={{ messages, updateMessages }}>
            {children}
        </AppContext.Provider>
    );
};
export const useMessageContext = () => useContext(AppContext);