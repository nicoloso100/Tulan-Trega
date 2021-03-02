import {
  IClearAppContext,
  ICloseSession,
  ISetAppContext,
  ISetUserLoggedId,
} from '../../Redux/user.reducer';
import {
  CLEAR_APP_CONTEXT,
  CLOSE_SESSION,
  SET_APP_CONTEXT,
  SET_USER_LOGGED_ID,
} from '../../Utils/constants';

export function setUserLogged(loggedId: string): ISetUserLoggedId {
  return {
    type: SET_USER_LOGGED_ID,
    payload: loggedId,
  };
}

export function setAppContext(context: TAppContext): ISetAppContext {
  return {
    type: SET_APP_CONTEXT,
    payload: context,
  };
}

export function clearAppContext(): IClearAppContext {
  return {
    type: CLEAR_APP_CONTEXT,
  };
}

export function closeSession(): ICloseSession {
  return {
    type: CLOSE_SESSION,
  };
}
