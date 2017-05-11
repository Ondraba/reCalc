import { CALCULATE } from '../actions/index';

const appState = {
  inputs: {
    n1: null,
    n2: null,
    n3 : null
  }
}

export default function(state = appState, action){
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type){
    case CALCULATE:
      const { newNumber } = action.payload;
      return newState;
  }
  return state;
}
