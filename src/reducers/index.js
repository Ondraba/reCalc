import { combineReducers } from 'redux';
import LogicReducer from './logic_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  logic: LogicReducer,
  form: formReducer
});

export default rootReducer;
