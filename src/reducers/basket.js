import {ADD_PHONE_TO_BASKET, CLEAN_BASKET, REMOVE_PHONE_FROM_BASKET} from "../actionTypes";
import * as R from 'ramda';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_PHONE_TO_BASKET:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_PHONE_FROM_BASKET:
      return [
        R.without(R.of(action.payload), state)
      ];
    case CLEAN_BASKET:
      return initialState;
    default:
      return [
        ...state
    ]

  }
}
