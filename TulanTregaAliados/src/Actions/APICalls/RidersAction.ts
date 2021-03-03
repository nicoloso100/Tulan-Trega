import {ShowErrorNotification} from '../../Utils/notifications';
import {GetRequest, PostRequest, PutRequest} from './AxiosHelper';
import {RidersUrls} from './URLs';

export const SignUpRider = async (
  data: ICreateUser,
): Promise<string | undefined> => {
  const result = await PostRequest(RidersUrls.signUp, data);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const SignInRider = async (
  data: IValidateUser,
): Promise<string | undefined> => {
  const result = await PostRequest(RidersUrls.signIn, data);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const GetRiderInfo = async (id: string): Promise<IRider | undefined> => {
  const result = await GetRequest(`${RidersUrls.getInfo}/${id}`);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const UpdateRider = async (
  id: string,
  data: IUpdateRider,
): Promise<IRider | undefined> => {
  const result = await PutRequest(id, RidersUrls.update, data);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};
