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
                    <UnsentMessageProvider>
                        <DraftsProvider>
                            {children}
                        </DraftsProvider>
                    </UnsentMessageProvider>
                </ChannelProvider>
            </UserProvider>
        </ApolloProvider>
    )
}

export default AppProvider
