import {ShowErrorNotification} from '../../Utils/notifications';
import {GetRequest, PostRequest} from './AxiosHelper';
import {StoresUrls} from './URLs';

export const SignUpStore = async (
  data: ICreateUser,
): Promise<string | undefined> => {
  const result = await PostRequest(StoresUrls.signUp, data);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const SignInStore = async (
  data: IValidateUser,
): Promise<string | undefined> => {
  const result = await PostRequest(StoresUrls.signIn, data);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const GetStoreInfo = async (id: string): Promise<IStore | undefined> => {
  const result = await GetRequest(`${StoresUrls.getInfo}/${id}`);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};
