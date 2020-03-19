import phones from './mockPhones';
import * as R from 'ramda';

export const fetchPhonesAPI = async() => {
  return new Promise((resolve, reject) => {
    resolve(phones);
  })
};

export const loadMorePhonesAPI = async({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(phones);
  })
};


export const fetchPhoneByIdAPI = async (id) => {
  console.log(id, 'Phone ID');
  return new Promise((resolve,  ) => {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
  })
};


