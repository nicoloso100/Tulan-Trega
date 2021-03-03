import {SET_STORE_USER_INFO} from '../Utils/constants';

export interface ISetStoreInfo {
  type: typeof SET_STORE_USER_INFO;
  payload: IStore;
}
export type IStoreActionType = ISetStoreInfo;

export interface IStoreReducer {
  storeInfo: IStore | null;
}

const initialState: IStoreReducer = {
  storeInfo: null,
};

const StoreReducer = (
  state: IStoreReducer = initialState,
  action: IStoreActionType,
): IStoreReducer => {
  switch (action.type) {
    case SET_STORE_USER_INFO:
      return {
        ...state,
        storeInfo: action.payload,
      };
    default:
      return state;
  }
};

export default StoreReducer;
