import { combineReducers } from 'redux';
import form from './form';
import visitors from './visitors';

export default combineReducers({
  form,
  visitors,
});
