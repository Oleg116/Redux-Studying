import * as actionType from './types';

export const addToDo = (toDo) => ({
  type: actionType.ADD_TODO,
  payload: toDo,
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

export const setActiveFilter = (activeFilter = 'All') => ({
  type: actionType.SET_ACTIVE_FILTER,
  payload: activeFilter,
});

export const editItem = (item, ID) => ({
  type: actionType.EDIT_ITEM,
  payload: item,
  ID: ID,
});
