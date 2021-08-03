import * as actionType from './types';

export const decrement = (counter) => ({
  type: actionType.DECREASE_COUNTER,
  payload: counter - 1,
});

export const increment = (counter) => ({
  type: actionType.INCREASE_COUNTER,
  payload: counter + 1,
});

export const addToDo = (toDo) => ({
  type: actionType.ADD_TODO,
  payload: { name: toDo, isDone: false },
});

export const removeToDo = (toDo) => ({
  type: actionType.REMOVE_TODO,
  payload: toDo,
});

export const resetTodo = () => ({
  type: actionType.RESET_TODO,
  payload: [],
});

export const makeDone = (toDo) => ({
  type: actionType.READY_TOGLE,
  payload: toDo,
});
