import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

import * as React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
), document.getElementById('app'));
