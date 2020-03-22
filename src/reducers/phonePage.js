import * as R from 'ramda';
import {FETCH_PHONE_BY_ID_FAIL, FETCH_PHONE_BY_ID_SUCCESS} from "../actionTypes";


const initialState = {
  id: null
};

export default (state=initialState, action) => {

  switch(action.type){

    case FETCH_PHONE_BY_ID_SUCCESS:
      return {
        ...state,
        id: action.payload.id
      };

    default:
      return { ...state }
  }

}
