import {applyMiddleware, createStore} from 'redux';
import {browserHistory} from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer.js';

const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, middleware);
