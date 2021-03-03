import {API_URL} from '@env';

const BaseUrl = API_URL;
console.log(API_URL);

export const StoresUrls = {
  signUp: `${BaseUrl}/stores/signUp`,
  signIn: `${BaseUrl}/stores/signIn`,
  getInfo: `${BaseUrl}/stores`,
  update: `${BaseUrl}/stores`,
};

export const RidersUrls = {
  signUp: `${BaseUrl}/riders/signUp`,
  signIn: `${BaseUrl}/riders/signIn`,
  getInfo: `${BaseUrl}/riders`,
  update: `${BaseUrl}/riders`,
};

export const ProductsUrls = {
  getDetails: `${BaseUrl}/products`,
  getAll: `${BaseUrl}/products/getAll`,
  create: `${BaseUrl}/products`,
  update: `${BaseUrl}/products`,
  delete: `${BaseUrl}/products`,
  trigger: `${BaseUrl}/products/trigger`,
};
