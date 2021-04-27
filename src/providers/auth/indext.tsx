import React, { Children, ReactElement, ReactNode, useState } from 'react'
import { createContext } from "react";

export interface AuthContextType {
    userLoggedIn?: any,
    setUserLoggedIn?: any,
}

const auth = {
    
}

export const AuthContext = createContext<AuthContextType>(auth);

interface Props {
    children: ReactNode
}

export default function AuthProvider(props: Props): ReactElement {

    const [userLoggedIn, setUserLoggedIn] = useState({})

    return (
        <AuthContext.Provider value={{
            userLoggedIn: userLoggedIn,
            setUserLoggedIn: setUserLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
