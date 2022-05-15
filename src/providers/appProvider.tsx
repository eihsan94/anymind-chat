import { ReactNode } from 'react'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { API_URL } from '@/config';
import { UserProvider } from './userProvider';
import { ChannelProvider } from './channelProvider';
import { UnsentMessageProvider } from './unsentMessageProvider';
import { MessageProvider } from './messageProvider';
import { DraftsProvider } from './draftsProvider';

export const gqlClient = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    fetchLatestMessages: {
                        merge(existing = [], incoming: any[]) {
                            return [...incoming];
                        },
                    },
                }
            }
        }
    })
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
                        <UnsentMessageProvider>
                            <DraftsProvider>
                                {children}
                            </DraftsProvider>
                        </UnsentMessageProvider>
                    </MessageProvider>
                </ChannelProvider>
            </UserProvider>
        </ApolloProvider>
    )
}

export default AppProvider
