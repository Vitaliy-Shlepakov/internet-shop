import phones from './mockPhones';

export const fetchPhonesAPI = async() => {
  return new Promise((resolve, reject) => {
    resolve(phones);
  })
};
