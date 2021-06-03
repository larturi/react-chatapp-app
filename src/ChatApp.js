import React from 'react';

import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './auth/AuthContext';

export const ChatApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
