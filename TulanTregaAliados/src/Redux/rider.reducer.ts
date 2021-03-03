import {SET_RIDER_USER_INFO} from '../Utils/constants';

export interface ISetRiderInfo {
  type: typeof SET_RIDER_USER_INFO;
  payload: IRider;
}
export type IRiderActionType = ISetRiderInfo;

export interface IRiderReducer {
  riderInfo: IRider | null;
}

const initialState: IRiderReducer = {
  riderInfo: null,
};

const RiderReducer = (
  state: IRiderReducer = initialState,
  action: IRiderActionType,
): IRiderReducer => {
  switch (action.type) {
    case SET_RIDER_USER_INFO:
      return {
        ...state,
        riderInfo: action.payload,
      };
    default:
      return state;
  }
};

export default RiderReducer;
