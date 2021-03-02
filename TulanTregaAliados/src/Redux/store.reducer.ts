import {SET_USER_INFO} from '../Utils/constants';

export interface ISetstoreInfo {
  type: typeof SET_USER_INFO;
  payload: IStore;
}
export type IstoreActionType = ISetstoreInfo;

export interface IstoreReducer {
  storeInfo: IStore | null;
}

const initialState: IstoreReducer = {
  storeInfo: null,
};

const StoreReducer = (
  state: IstoreReducer = initialState,
  action: IstoreActionType,
): IstoreReducer => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        storeInfo: action.payload,
      };
    default:
      return state;
  }
};

export default StoreReducer;
