import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Routes from "./routes";

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
