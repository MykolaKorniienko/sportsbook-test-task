import { combineReducers } from 'redux';
import { login, loading } from './loginReducer';

const rootReducer = combineReducers({
  login,
  loading
});

export default rootReducer;