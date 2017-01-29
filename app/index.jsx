import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store.js';
import _ from 'underscore';
import Utils from './js/utils.js';
import 'babel-polyfill';

global.jQuery = $;
global.$ = $;
global._ = _;
global.Utils = Utils;

import App from './components/App/App';
import Home from './routes/Home/Home.jsx';

import './scss/index.scss';
import './scss/devices.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute name="root" component={Home} />
      </Route>
    </Router>
  </Provider>, document.querySelector('#react-entry'));
