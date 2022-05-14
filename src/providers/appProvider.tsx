import { ReactNode } from 'react'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { API_URL } from '@/config';
import { UserProvider } from './userProvider';
import { ChannelProvider } from './channelProvider';
import { MessageProvider } from './messageProvider';

const gqlClient = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
});


interface AppProviderProps {
    children: ReactNode;
};

function AppProvider(props: AppProviderProps) {
    const { children } = props

    return (
        <ApolloProvider client={gqlClient}>
            <UserProvider>
                <ChannelProvider>
                    <MessageProvider>
                        {children}
                    </MessageProvider>
                </ChannelProvider>
            </UserProvider>
        </ApolloProvider>
    )
}

export default AppProvider
