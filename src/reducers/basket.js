import {ADD_PHONE_TO_BASKET} from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_PHONE_TO_BASKET:
      console.log(state, 'STATTE');
      // const newArrayOfId = state.push(action.payload);
      return {
        ...state,
        id: 1
      };
    default:
      return {
        ...state
      }

  }
}