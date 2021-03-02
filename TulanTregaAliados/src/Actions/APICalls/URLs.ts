import {API_URL} from '@env';

const BaseUrl = API_URL;

export const StoresUrls = {
  signUp: `${BaseUrl}/stores/signUp`,
  signIn: `${BaseUrl}/stores/signIn`,
  getInfo: `${BaseUrl}/stores`,
  update: `${BaseUrl}/stores`,
};

export const ProductsUrls = {
  getDetails: `${BaseUrl}/products`,
  getAll: `${BaseUrl}/products/getAll`,
  create: `${BaseUrl}/products`,
  update: `${BaseUrl}/products`,
  delete: `${BaseUrl}/products`,
  trigger: `${BaseUrl}/products/trigger`,
};
