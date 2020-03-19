import {FETCH_PHONE_BY_ID_SUCCESS, FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS} from "../actionTypes";
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, action) => {

  switch(action.type){

    case FETCH_PHONES_SUCCESS:
      //преобразование массива объектов в объект объектов по ключам id
      const newValus = R.indexBy(R.prop('id'), action.payload);
      return {
        ...state,
        ...newValus
      };

    case LOAD_MORE_PHONES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), action.payload);
      return {
        ...state,
        ... newValue
      };

    case FETCH_PHONE_BY_ID_SUCCESS:
      return {
        ... state,
        ...{[action.payload.id]: action.payload}
      };

    default:
      return {...state}
  }
}
