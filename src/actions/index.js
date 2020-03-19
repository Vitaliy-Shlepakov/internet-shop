import {
  FETCH_PHONES_FAIL,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_FAIL,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS
} from "../actionTypes";

import {fetchPhonesAPI, loadMorePhonesAPI} from '../api/index';
import * as R from "ramda";


const getRenderPhonesLenght = state => R.length(state.phonesPage.ids);

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


export const loadMorePhones = ( ) => {
  return async (dispatch, getState) => {

    const offset = getRenderPhonesLenght(getState());

    dispatch({ type: LOAD_MORE_PHONES_START});

    try{
      const phones = await loadMorePhonesAPI({offset});
      dispatch({
        type: LOAD_MORE_PHONES_SUCCESS ,
        payload: phones
      })
    }catch(err){
      dispatch({
        type: LOAD_MORE_PHONES_FAIL,
        payload: err,
        error: true
      })
    }
  }
};

