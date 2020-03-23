import {ADD_PHONE_TO_BASKET} from "../actionTypes";
import * as R from 'ramda';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_PHONE_TO_BASKET:
      // return R.append(action.payload, state);
      return [
        ...state,
        action.payload
      ];
    default:
      return [
        ...state
    ]

  }
}
