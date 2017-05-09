import { CALCULATE } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case CALCULATE:
      return [action.payload.data, ...state];
  }
  return state;
}
