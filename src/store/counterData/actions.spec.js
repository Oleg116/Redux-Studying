import * as action from './actions';

test('removeToDo should return obj with specific type and ID payload', () => {
  expect(action.removeToDo(5)).toEqual({
    type: 'REMOVE_TODO',
    payload: 5,
  });
});

const mockedEvent = {
  target: {
    value: 'drink coffee',
  },
};

test('clearCompleted should return obj with type CLEAR_COMPLETED', () => {
  expect(action.clearCompleted()).toEqual({
    type: 'CLEAR_COMPLETED',
  });
});

test('makeDone should return obj with type READY_TOGLE and ID for specific item', () => {
  expect(action.makeDone(5)).toEqual({
    type: 'READY_TOGLE',
    payload: 5,
  });
});

test('clearCompleted should return obj with type CLEAR_COMPLETED', () => {
  expect(action.clearCompleted()).toEqual({
    type: 'CLEAR_COMPLETED',
  });
});

test('setAllCompleted should return obj with type SET_ALL_COMPLETED', () => {
  expect(action.setAllCompleted()).toEqual({
    type: 'SET_ALL_COMPLETED',
  });
});

test('setAllUncompleted should return obj with type SET_ALL_UNCOMPLETED', () => {
  expect(action.setAllUncompleted()).toEqual({
    type: 'SET_ALL_UNCOMPLETED',
  });
});

test('setAllUncompleted should return obj with type SET_ACTIVE_FILTER and default payload value', () => {
  expect(action.setActiveFilter()).toEqual({
    type: 'SET_ACTIVE_FILTER',
    payload: 'All',
  });
});

test('setAllUncompleted should return obj with type SET_ACTIVE_FILTER and Active payload value', () => {
  expect(action.setActiveFilter('Active')).toEqual({
    type: 'SET_ACTIVE_FILTER',
    payload: 'Active',
  });
});

test('setAllUncompleted should return obj with type SET_ACTIVE_FILTER and Active payload value', () => {
  expect(action.setActiveFilter('Active')).toEqual({
    type: 'SET_ACTIVE_FILTER',
    payload: 'Active',
  });
});

test('setAllUncompleted should return obj with type SET_ACTIVE_FILTER and Completed payload value', () => {
  expect(action.setActiveFilter('Completed')).toEqual({
    type: 'SET_ACTIVE_FILTER',
    payload: 'Completed',
  });
});

test('setAllUncompleted should return obj with type SET_ACTIVE_FILTER and Completed payload value', () => {
  expect(action.editItem(mockedEvent, 5)).toEqual({
    type: 'EDIT_ITEM',
    payload: 'drink coffee',
    ID: 5,
  });
});
