import React, { createContext, useCallback, useState } from 'react';

import { fetchSinToken } from '../helpers/httpClient';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    ckecking: true,
    logged: false,
    name: null,
    email: null
};

export const AuthProvider= ({ children }) => {

    const [ auth, setAuth ] = useState(initialState);

    const login = async (email, password) => {

        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        console.log(resp);

    };

    const register = (nombre, email, password) => {

    };

    const verificaToken = useCallback( () => {

    }, []);

    const logout = () => {

    };

    return (
        <AuthContext.Provider value={{
            login,
            register,
            verificaToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}