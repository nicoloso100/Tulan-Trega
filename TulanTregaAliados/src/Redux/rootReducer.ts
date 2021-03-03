import {combineReducers} from 'redux';
import RiderReducer from './rider.reducer';
import StoreReducer from './store.reducer';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
  storeReducer: StoreReducer,
  riderReducer: RiderReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
