import { combineReducers } from 'redux';
import phoneReducer from './phones';
import { connectRouter } from 'connected-react-router';

export default function createRootReducer(history) {
  return combineReducers({
    phones: phoneReducer,
    router: connectRouter(history)
  })
}
