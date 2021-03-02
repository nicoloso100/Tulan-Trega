import {combineReducers} from 'redux';
import StoreReducer from './store.reducer';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
  storeReducer: StoreReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
