import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { AuthContext } from '../auth/AuthContext';

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
                   <Route path="/auth" component={AuthRouter}/>
                   <Route exact path="/" component={ ChatPage }/>

                   <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
};
