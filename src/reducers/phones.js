import {FETCH_PHONES_SUCCESS} from "../actionTypes";
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
      }

    default:
      return {...state}
  }
}
