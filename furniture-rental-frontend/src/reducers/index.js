import { combineReducers } from 'redux';
import authReducer from './authReducer';
import furnitureReducer from './furnitureReducer';

export default combineReducers({
  auth: authReducer,
  furniture: furnitureReducer,
});
