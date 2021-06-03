import React, { createContext, useCallback, useState } from 'react';

// Con Fetch
// import { fetchSinToken } from '../helpers/fetch';

// Con Axios
import { fetchSinToken } from '../helpers/axios';

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
