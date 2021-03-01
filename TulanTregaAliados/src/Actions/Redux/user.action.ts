import {IClearAppContext, ISetAppContext} from '../../Redux/user.reducer';
import {CLEAR_APP_CONTEXT, SET_APP_CONTEXT} from '../../Utils/constants';

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
