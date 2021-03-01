import {CLEAR_APP_CONTEXT, SET_APP_CONTEXT} from '../Utils/constants';

export interface ISetAppContext {
  type: typeof SET_APP_CONTEXT;
  payload: TAppContext;
}

export interface IClearAppContext {
  type: typeof CLEAR_APP_CONTEXT;
}

export type IUserActionType = ISetAppContext | IClearAppContext;

export interface IUserReducer {
  appContext: TAppContext | null;
}

const initialState: IUserReducer = {
  appContext: null,
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
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
