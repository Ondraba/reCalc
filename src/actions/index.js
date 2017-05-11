export const CALCULATE = 'CALCULATE';

export function calculate(newNumber){
  return {
    type : CALCULATE,
    payload: newNumber
  };
}
