import {ISetStoreInfo} from '../../Redux/store.reducer';
import {SET_STORE_USER_INFO} from '../../Utils/constants';

export function setStoreUserInfo(information: IStore): ISetStoreInfo {
  return {
    type: SET_STORE_USER_INFO,
    payload: information,
  };
}
