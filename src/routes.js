import React from 'react';
import { browserHistory, BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';

import App from './App'
import Hello from './Hello'
import Demo42_001 from './demos/42_001'

export const AppRouter = () => {
    return (
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/hello" component={Hello} />
                <Route path="/42_001" component={Demo42_001} />
            </Switch>
        </BrowserRouter>

    );
}