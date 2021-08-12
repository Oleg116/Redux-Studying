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

export const clearCompleted = () => ({
  type: actionType.CLEAR_COMPLETED,
});

export const makeDone = (toDo) => ({
  type: actionType.READY_TOGLE,
  payload: toDo,
});

export const setAllCompleted = () => ({
  type: actionType.SET_ALL_COMPLETED,
});

export const setAllUncompleted = () => ({
  type: actionType.SET_ALL_UNCOMPLETED,
});

export const showCompleted = () => ({
  type: actionType.SHOW_COMPLETED,
});

export const showActive = () => ({
  type: actionType.SHOW_ACTIVE,
});

export const showAll = () => ({
  type: actionType.SHOW_ALL,
});
