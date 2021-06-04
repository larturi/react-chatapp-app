import React, { createContext, useCallback, useState } from 'react';
import { fetchConToken } from '../helpers/fetch';

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
        
        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                ckecking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email
            }); 
        }

        return resp.ok;
    };

    const register = async (nombre, email, password) => {

        const resp = await fetchSinToken('auth/new', { nombre, email, password }, 'POST');
        
        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                ckecking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email
            }); 

            return true;
        }

        return resp.msg;

    };

    const verificaToken = useCallback( async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                ckecking: false,
                logged: false,
                name: null,
                email: null
            }); 

            return false;
        };

        const resp = await fetchConToken('auth/renew');

        if (resp.ok && resp.usuario !== null) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            console.log('Autenticado');

            setAuth({
                uid: usuario.uid,
                ckecking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email
            }); 

            return true;
        } else {
            setAuth({
                uid: null,
                ckecking: false,
                logged: false,
                name: null,
                email: null
            }); 

            return false;
        }

    }, []);

    const logout = () => {

    };

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
