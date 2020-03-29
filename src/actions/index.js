import {
  ADD_PHONE_TO_BASKET,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PHONE_BY_ID_FAIL,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_FAIL,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAIL,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE
} from "../actionTypes";

import {fetchPhonesAPI, loadMorePhonesAPI, fetchPhoneByIdAPI} from '../api/index';
import * as R from "ramda";
import {fetchCategoriesAPI} from "../api";


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

export const fetchPoneById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_PHONE_BY_ID_START
    });

    try{
      const response = await fetchPhoneByIdAPI(id);
      dispatch({
        type: FETCH_PHONE_BY_ID_SUCCESS,
        payload: response
      })
    }catch(e){
      dispatch({
        type: FETCH_PHONE_BY_ID_FAIL,
        payload: e,
        error: true
      })
    }
  };
};

export const addPhoneToBasket = id => {
  return dispatch => {
    dispatch({
      type: ADD_PHONE_TO_BASKET,
      payload: id,
    });
  }
};

export const searchPhone = text => dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text
  });
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_START});

    try{
      const categories = await fetchCategoriesAPI();
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
      })
    }catch(err){
      dispatch({
        type: FETCH_CATEGORIES_FAIL,
        payload: err,
        error: true
      })
    }
  }
};

