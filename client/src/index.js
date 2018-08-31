import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk), composeEnhancers),
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root'),
);
