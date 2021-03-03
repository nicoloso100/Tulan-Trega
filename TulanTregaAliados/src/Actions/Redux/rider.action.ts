import {ISetRiderInfo} from '../../Redux/rider.reducer';
import {SET_RIDER_USER_INFO} from '../../Utils/constants';

export function setRiderUserInfo(information: IRider): ISetRiderInfo {
  return {
    type: SET_RIDER_USER_INFO,
    payload: information,
  };
}
