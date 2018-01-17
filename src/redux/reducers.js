import { combineReducers } from 'redux';
import { fruitReducer } from './modules/fruit';
export default combineReducers({
  produce: fruitReducer
});
