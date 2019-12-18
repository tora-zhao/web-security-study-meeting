import React from 'react';
import { browserHistory, BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Hello from './Hello'
import Demo42_002 from './demos/42_002'
import Demo42_010 from './demos/42_010'
import Demo42_013 from './demos/42_013'
import Demo46_001 from './demos/46_001'
import Demo46_002 from './demos/46_002'
import Demo46_010 from './demos/46_010'
import Demo4a_001 from './demos/4a_001'
import Demo4h_001 from './demos/4h_001'
import Demo4h_002 from './demos/4h_002'
import Demo4h_004 from './demos/4h_004'
import Demo4h_005 from './demos/4h_005'
import Demo4h_006 from './demos/4h_006'
import Demo4h_007 from './demos/4h_007'
import Demo4h_008 from './demos/4h_008'
import Demo4h_010 from './demos/4h_010'
import Demo4h_011 from './demos/4h_011'

export const AppRouter = () => {
    return (
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/hello" component={Hello} />
                <Route path="/42_002" component={Demo42_002} />
                <Route path="/42_010" component={Demo42_010} />
                <Route path="/42_013" component={Demo42_013} />
                <Route path="/46_001" component={Demo46_001} />
                <Route path="/46_002" component={Demo46_002} />
                <Route path="/46_010" component={Demo46_010} />
                <Route path="/4a_001" component={Demo4a_001} />
                <Route path="/4h_001" component={Demo4h_001} />
                <Route path="/4h_002" component={Demo4h_002} />
                <Route path="/4h_004" component={Demo4h_004} />
                <Route path="/4h_005" component={Demo4h_005} />
                <Route path="/4h_006" component={Demo4h_006} />
                <Route path="/4h_007" component={Demo4h_007} />
                <Route path="/4h_008" component={Demo4h_008} />
                <Route path="/4h_010" component={Demo4h_010} />
                <Route path="/4h_011" component={Demo4h_011} />
            </Switch>
        </BrowserRouter>
    );
}