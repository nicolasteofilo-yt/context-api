import { useState, createContext, ReactNode } from 'react';

interface UserProps {
    name: string;
    email: string;
}

interface AuthContextData {
    user: UserProps
    setUser: ({ name, email }: UserProps) => void;
}

const initialState: AuthContextData = {
   user: {
    name: '',
    email: '',
   },
   setUser({ name, email }) {
       
   },
}


export const AuthContext = createContext<AuthContextData>(initialState);

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    function setUser({ name, email }: UserProps) {
        setData({
            name,
            email
        })
    }

    return (
        <AuthContext.Provider
            value={{
                setUser,
                user: data
            }}
        >
            {children}
        </AuthContext.Provider>
    )   
}