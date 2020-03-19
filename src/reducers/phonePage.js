import * as R from 'ramda';
import { FETCH_PHONE_BY_ID_FAIL } from "../actionTypes";


const initialState = {
  id: null
};

export default (state=initialState, action) => {

  switch(action.type){

    case FETCH_PHONE_BY_ID_FAIL:
      return {
        ...state,
        id: action.payload.id
      };

    default:
      return { ...state }
  }

}
