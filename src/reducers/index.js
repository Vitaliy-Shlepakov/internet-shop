import { combineReducers } from 'redux';
import phoneReducer from './phones';
import { connectRouter } from 'connected-react-router';
import phonesPage from './phonesPage';
import phonePage from "./phonePage";

export default function createRootReducer(history) {
  return combineReducers({
    phones: phoneReducer,
    phonesPage,
    phonePage,
    router: connectRouter(history)
  })
}
