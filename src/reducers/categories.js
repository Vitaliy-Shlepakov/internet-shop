import {FETCH_CATEGORIES_SUCCESS} from "../actionTypes";
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, action) => {

  switch(action.type){

    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), action.payload);
      return {
        ...state,
        ...newValues
      };

    default:
      return {...state}
  };
};