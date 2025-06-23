import React, { createContext, useContext, useState,  useEffect } from 'react';
const AuthContext = createContext();

export function AuthProvider({ children }) {
    useEffect(() => {
        const savedToken = localStorage.getItem('pm-react-app-token');
        if (savedToken) setToken(savedToken);
    }, [])

    const [token, setToken] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('pm-react-app-token', newToken); // persistente
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('pm-react-app-token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  return useContext(AuthContext);
}
