import {FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE} from "../actionTypes";
import * as R from 'ramda';

const initialState = {
  ids: [],
  search: ''
};


export default (state = initialState, action) => {

  switch(action.type){

    case FETCH_PHONES_SUCCESS:
      //получаем массив id из массива объекта
      const allIds = R.pluck('id', action.payload);
      return {
        ...state,
        ids: allIds
      };

    case LOAD_MORE_PHONES_SUCCESS:
      const newIds = R.pluck('id', action.payload);
      return {
        ...state,
        ids: R.concat(state.ids, newIds)
      };

    case SEARCH_PHONE:
      return {
        ...state,
        search: action.payload
      };

    default:
      return {...state}
  }
}
