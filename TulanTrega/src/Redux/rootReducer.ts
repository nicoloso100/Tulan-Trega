import {combineReducers} from 'redux';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
