import React from 'react';
import { browserHistory, BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Hello from './Hello'
import Demo42_002 from './demos/42_002'
import Demo42_010 from './demos/42_010'
import Demo42_013 from './demos/42_013'

export const AppRouter = () => {
    return (
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/hello" component={Hello} />
                <Route path="/42_002" component={Demo42_002} />
                <Route path="/42_010" component={Demo42_010} />
                <Route path="/42_013" component={Demo42_013} />
            </Switch>
        </BrowserRouter>

    );
}