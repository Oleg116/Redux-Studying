import * as actionType from './types';

export const decrement = (counter) => ({
  type: actionType.DECREASE_COUNTER,
  payload: counter - 1,
});

export const increment = (counter) => ({
  type: actionType.INCREASE_COUNTER,
  payload: counter + 1,
});
