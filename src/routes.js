import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';

import { Home, About, Karibu } from './components';
import { AddImage } from './containers';

const store = configureStore();

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Karibu} />
        <Route path="/about" component={About} />
      </Route>
      <Route path="/new" component={AddImage}></Route>
    </Router>
  </Provider>

)

export default Routes;
