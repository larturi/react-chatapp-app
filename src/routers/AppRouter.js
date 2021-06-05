import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { auth, verificaToken } = useContext(AuthContext);

    useEffect(() => {
        verificaToken();
    }, [verificaToken]);

    if (auth.ckecking) {
        return <h5>Espere por favor...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                   <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter}/>
                   <PrivateRoute isAuthenticated={auth.logged} exact path="/" component={ ChatPage }/>

                   <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
};
