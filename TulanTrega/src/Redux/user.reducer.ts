import {
  CLEAR_APP_CONTEXT,
  CLOSE_SESSION,
  SET_APP_CONTEXT,
  SET_USER_INFO,
  SET_USER_LOGGED_ID,
} from '../Utils/constants';

export interface ISetAppContext {
  type: typeof SET_APP_CONTEXT;
  payload: TAppContext;
}

export interface IClearAppContext {
  type: typeof CLEAR_APP_CONTEXT;
}

export interface ISetUserLoggedId {
  type: typeof SET_USER_LOGGED_ID;
  payload: string;
}

export interface ISetUserInfo {
  type: typeof SET_USER_INFO;
  payload: IStore;
}

export interface ICloseSession {
  type: typeof CLOSE_SESSION;
}

export type IUserActionType =
  | ISetAppContext
  | IClearAppContext
  | ISetUserLoggedId
  | ISetUserInfo
  | ICloseSession;

export interface IUserReducer {
  appContext: TAppContext | null;
  userLoggedId: string | null;
  userInfo: IStore | null;
}

const initialState: IUserReducer = {
  appContext: null,
  userLoggedId: null,
  userInfo: null,
};

const UserReducer = (
  state: IUserReducer = initialState,
  action: IUserActionType,
): IUserReducer => {
  switch (action.type) {
    case SET_APP_CONTEXT:
      return {
        ...state,
        appContext: action.payload,
      };
    case CLEAR_APP_CONTEXT:
      return {
        ...state,
        appContext: null,
      };
    case SET_USER_LOGGED_ID:
      return {
        ...state,
        userLoggedId: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLOSE_SESSION:
      return {
        ...state,
        userLoggedId: null,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
