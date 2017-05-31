import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

import { Home, About, Karibu } from './components';
import { AddImage } from './containers';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Karibu} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="/new" component={AddImage}></Route>
  </Router>
)

export default Routes;
