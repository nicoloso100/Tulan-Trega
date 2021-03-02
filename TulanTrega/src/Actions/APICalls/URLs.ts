import {API_URL} from '@env';

const BaseUrl = API_URL;

export const StoresUrls = {
  signUp: `${BaseUrl}/stores/signUp`,
  signIn: `${BaseUrl}/stores/signIn`,
  getInfo: `${BaseUrl}/stores`,
};
