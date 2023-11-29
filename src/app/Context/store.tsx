'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState, Children } from "react";

type UserData = {
    userName: string,
}

interface ContextProps {
    jwt: string,
    setJwt: Dispatch<SetStateAction<string>>,
    userData: UserData[],
    setUserData: Dispatch<SetStateAction<UserData[]>>
    login: boolean,
    setLogin: Dispatch<SetStateAction<boolean>>
}

const UserContext = createContext<ContextProps>({
    jwt: '',
    setJwt: (): string => '',
    userData: [],
    setUserData: (): UserData[] => [],
    login: false,
    setLogin: (): boolean => false
})

export const UserContextProvider = ({ children }) => {
    const [jwt, setJwt] = useState("")
    const [userData, setUserData] = useState<[] | UserData[]>([])
    const [login, setLogin] = useState(false)

    return (
        <UserContext.Provider value={{jwt, setJwt, userData, setUserData, login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)