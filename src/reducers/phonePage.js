import * as R from 'ramda';
import {FETCH_PHONE_BY_ID_SUCCESS, SEARCH_PHONE} from "../actionTypes";


const initialState = {
  id: null,
  search: ''
};

export default (state=initialState, action) => {

  switch(action.type){

    case FETCH_PHONE_BY_ID_SUCCESS:
      return {
        ...state,
        id: action.payload.id
      };

    case SEARCH_PHONE:
      return {
        ...state,
        search: action.payload
      };

    default:
      return { ...state }
  }

}
