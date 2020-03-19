import phones from './mockPhones';

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
