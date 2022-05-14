import { useState, createContext, useContext, ReactNode } from "react";

interface User {
    userId: string
}
const initUser: User = {
    userId: "Joyse",
}

// Create Context Object
export const AppContext = createContext({
    currentUser: initUser,
    assignCurrentUser: (newUser: User) => { },
});

interface Props {
    children?: ReactNode;
}

// Create a provider for components to consume and subscribe to changes
export function UserProvider(props: Props) {
    const { children } = props
    const [currentUser, setCurrentUser] = useState<User>(initUser);
    const assignCurrentUser = (newUser: User) => {
        setCurrentUser(newUser)
    }
    return (
        <AppContext.Provider value={{ currentUser, assignCurrentUser }}>
            {children}
        </AppContext.Provider>
    );
};
export const useUserContext = () => useContext(AppContext);