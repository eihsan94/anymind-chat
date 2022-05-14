import { ReactNode } from 'react'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { API_URL } from '@/config';

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
            {children}
        </ApolloProvider>
    )
}

export default AppProvider
