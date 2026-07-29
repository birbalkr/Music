import { createContext } from "react";

export const AuthContextData = createContext();

export const AuthContext = ({ children }) => {


    const user = 'hello...............'

    return (
        <AuthContextData.Provider value={{user}}>
            {children}
        </AuthContextData.Provider>
    )
}

export default AuthContext
