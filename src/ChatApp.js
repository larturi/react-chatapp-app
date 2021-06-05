import React from 'react';

import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';

export const ChatApp = () => {
    return (
        <AuthProvider>
            <SocketProvider>
                <AppRouter />
            </SocketProvider>
        </AuthProvider>
    )
}
