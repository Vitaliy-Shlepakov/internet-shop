import './main.css';
import { createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),

);

document.write('Hello React/Redux!');
