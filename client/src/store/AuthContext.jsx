import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const StoreToken = (newToken) => {
        localStorage.setItem("token", newToken)
        setToken(newToken);
    };

    const clearToken = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    return <AuthContext.Provider value={{ token, StoreToken, clearToken }}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
}