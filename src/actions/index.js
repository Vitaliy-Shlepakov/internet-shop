import {FETCH_PHONES_FAIL, FETCH_PHONES_START, FETCH_PHONES_SUCCESS} from "../actionTypes";
import {fetchPhonesAPI} from '../api/index'

export const fetchPhones = () => {

  return async (dispatch) => {
      dispatch({ type: FETCH_PHONES_START});

      try{
        const phones = await fetchPhonesAPI();
        dispatch({
          type: FETCH_PHONES_SUCCESS,
          payload: phones
        })
      }catch(err){
        dispatch({
          type: FETCH_PHONES_FAIL,
          payload: err,
          error: true
        })
      }
  }
};
