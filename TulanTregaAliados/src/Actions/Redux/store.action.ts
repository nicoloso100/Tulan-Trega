import {ISetUserInfo} from '../../Redux/store.reducer';
import {SET_USER_INFO} from '../../Utils/constants';

export function setUserInfo(information: IStore): ISetUserInfo {
  return {
    type: SET_USER_INFO,
    payload: information,
  };
}
