import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { createHashHistory } from 'history';
//import { BrowserRouter as Router, Route } from 'react-router';

import App from '../components/app';
import { Bins } from '../imports/collections/bins';
import BinsMain from '../components/bins/bins_main';
import BinsList from '../components/bins/bins_list';

//const history = createHashHistory();

const routes = (
    <Router>
        <div>
            <Route component={App} />
            <Switch>
                <Route exact path='/' component={BinsList} />
                <Route path='/bins/:binId' component={BinsMain} />
            </Switch>
        </div>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'))
});



