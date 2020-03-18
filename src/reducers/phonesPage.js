import {FETCH_PHONES_SUCCESS} from "../actionTypes";
import * as R from 'ramda';

const initialState = {
  ids: []
};


export default (state = initialState, action) => {

  switch(action.type){

    case FETCH_PHONES_SUCCESS:
      //получаем массив id из массива объекта
      const allIds = R.pluck('id', action.payload);
      return {
        ...state,
        ids: allIds
      }

    default:
      return {...state}
  }
}
