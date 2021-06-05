import React from 'react';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => {
    return (
        <Route { ...props } 
            component={ (props) => (
               (isAuthenticated) 
                ? <Component { ...props } />
                : <Redirect to="/auth/login" />
            )}
        />
    )
};
