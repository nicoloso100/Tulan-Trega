import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const ConfigureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

const ReduxStore = ConfigureStore();

export default ReduxStore;
