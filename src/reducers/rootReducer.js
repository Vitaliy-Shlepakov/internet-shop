import { combineReducers } from 'redux';
import phoneReducer from './phones';
import { connectRouter } from 'connected-react-router';
import phonesPage from './phonesPage';
import phonePage from "./phonePage";
import basketReducer from './basket';
import categoriesReducer from './categories';

export default function createRootReducer(history) {
  return combineReducers({
    phones: phoneReducer,
    phonesPage,
    phonePage,
    categories: categoriesReducer,
    basket: basketReducer,
    router: connectRouter(history)
  })
}
