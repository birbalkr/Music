import { createContext } from "react";

export const AuthContextData = createContext();

export const AuthContext = ({ children }) => {
    const registerUser = (newUser) => {
        const user = JSON.parse(localStorage.getItem('user')) || [];

        const alreadyExists = user.find((user) => user.email === newUser.email);
        if (alreadyExists) {
            return { success: false, message: 'User already exists' };
        }

        const updatedUsers = [...user, newUser];
        localStorage.setItem('user', JSON.stringify(updatedUsers));
        return { success: true, message: 'User registered successfully' };
    }

    return (
        <AuthContextData.Provider value={{ registerUser }}>
            {children}
        </AuthContextData.Provider>
    )
}

export default AuthContext
