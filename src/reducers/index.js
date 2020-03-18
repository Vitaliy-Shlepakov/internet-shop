import { combineReducers } from 'redux';
import phoneReducer from './phones';
import { connectRouter } from 'connected-react-router';
import phonesPage from './phonesPage';

export default function createRootReducer(history) {
  return combineReducers({
    phones: phoneReducer,
    phonesPage,
    router: connectRouter(history)
  })
}
