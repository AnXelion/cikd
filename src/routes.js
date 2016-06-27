import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './ui/home';
import Test from './ui/test';
import About from './ui/about';
import Admin from './ui/admin'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
      <Route path="about" component={About} />
      <Route path="admin" component={Admin} />
    </Route>
  </Router>
);
