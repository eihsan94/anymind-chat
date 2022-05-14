import { useState, createContext, useContext, ReactNode } from "react";

interface Channel {
    channelId: string
}
const initChannel: Channel = {
    channelId: localStorage.getItem("initChannelId") || "1",
}

// Create Context Object
export const AppContext = createContext({
    currentChannel: initChannel,
    assignCurrentChannel: (newChannel: Channel) => { },
});

interface Props {
    children?: ReactNode;
}

// Create a provider for components to consume and subscribe to changes
export function ChannelProvider(props: Props) {
    const { children } = props
    const [currentChannel, setCurrentChannel] = useState<Channel>(initChannel);
    const assignCurrentChannel = (newChannel: Channel) => {
        localStorage.setItem("initChannelId", newChannel.channelId)
        setCurrentChannel(newChannel)
    }
    return (
        <AppContext.Provider value={{ currentChannel, assignCurrentChannel }}>
            {children}
        </AppContext.Provider>
    );
};
export const useChannelContext = () => useContext(AppContext);