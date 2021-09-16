import rootReducer from './reducer';

const initialEmptyState = {
  toDo: [],
  filteredList: [],
};

const initialMockedState = {
  toDo: [{ name: 'wake up', isDone: false, ID: 1 },
  { name: 'drink coffee', isDone: true, ID: 2 },
  { name: 'do somethink else', isDone: false, ID: 3 }],

  filteredList: [{ name: 'wake up', isDone: false, ID: 1 },
  { name: 'drink coffee', isDone: true, ID: 2 },
  { name: 'do somethink else', isDone: false, ID: 3 }],
};

const AddToDoAction = { type: 'ADD_TODO', payload: 'drink coffee', ID: 1 };
const removeToDo = {
  type: 'REMOVE_TODO', payload: 1,
};

const editAction = {
  type: 'EDIT_ITEM',
  payload: 'test all units',
  ID: 3,
};

const filterAction = (type) => ({
  type: 'SET_ACTIVE_FILTER',
  payload: type,
})


test('add to the to do lists should be correct', () => {
  expect(rootReducer(initialEmptyState, AddToDoAction).filteredList[0]).toEqual({ name: 'drink coffee', isDone: false, ID: 1 });
});

test('add to the to do lists should be correct', () => {
  expect(rootReducer(initialEmptyState, AddToDoAction).toDo[0]).toEqual({ name: 'drink coffee', isDone: false, ID: 1 });
});

test('action should remove first item and change length from 3 to 2', () => {
  expect(rootReducer(initialMockedState, removeToDo).filteredList.length).toBe(2);
});

test('action should remove first item and change length from 3 to 2', () => {
  expect(rootReducer(initialMockedState, removeToDo).toDo.length).toBe(2);
});

test('action should remove done item and change length from 3 to 2', () => {
  expect(rootReducer(initialMockedState, { type: 'CLEAR_COMPLETED' }).filteredList.length).toBe(2);
});

test('action should remove doned item', () => {
  expect(rootReducer(initialMockedState, { type: 'CLEAR_COMPLETED' }).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});


test('action should remove doned item', () => {
  expect(rootReducer(initialMockedState, { type: 'CLEAR_COMPLETED' }).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('ready toggle should switch first item from undoned to doned', () => {
  expect(rootReducer(initialMockedState, { type: 'READY_TOGLE', payload: 1 }).filteredList).toEqual(
    [{ name: 'wake up', isDone: true, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('ready toggle should switch second item from doned to undoned', () => {
  expect(rootReducer(initialMockedState, { type: 'READY_TOGLE', payload: 2 }).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: false, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('ready toggle should switch first item from undoned to doned', () => {
  expect(rootReducer(initialMockedState, { type: 'READY_TOGLE', payload: 1 }).toDo).toEqual(
    [{ name: 'wake up', isDone: true, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('ready toggle should switch second item from doned to undoned', () => {
  expect(rootReducer(initialMockedState, { type: 'READY_TOGLE', payload: 2 }).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: false, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('SET_ALL_COMPLETED should set all items doned', () => {
  expect(rootReducer(initialMockedState, { type: 'SET_ALL_COMPLETED' }).toDo).toEqual(
    [{ name: 'wake up', isDone: true, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: true, ID: 3 }],
  );
});

test('SET_ALL_COMPLETED should set all items doned', () => {
  expect(rootReducer(initialMockedState, { type: 'SET_ALL_COMPLETED' }).filteredList).toEqual(
    [{ name: 'wake up', isDone: true, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: true, ID: 3 }],
  );
});

test('SET_ALL_COMPLETED should set all items undoned', () => {
  expect(rootReducer(initialMockedState, { type: 'SET_ALL_UNCOMPLETED' }).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: false, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('SET_ALL_COMPLETED should set all items undoned', () => {
  expect(rootReducer(initialMockedState, { type: 'SET_ALL_UNCOMPLETED' }).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: false, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('edit action should edit specific item', () => {
  expect(rootReducer(initialMockedState, editAction).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'test all units', isDone: false, ID: 3 }],
  );
});

test('edit action should edit specific item', () => {
  expect(rootReducer(initialMockedState, editAction).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'test all units', isDone: false, ID: 3 }],
  );
});

test('toDo array shouldn`t change after filterMode all', () => {
  expect(rootReducer(initialMockedState, filterAction('All')).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('filteredList array shouldn`t change after filterMode all', () => {
  expect(rootReducer(initialMockedState, filterAction('All')).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('activeFilter should be All position', () => {
  expect(rootReducer(initialMockedState, filterAction('All')).activeFilter).toBe('All');
});


test('toDo array shouldn`t change after filterMode Active', () => {
  expect(rootReducer(initialMockedState, filterAction('Active')).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('In filteredList array should be only undoned items after filterMode Active', () => {
  expect(rootReducer(initialMockedState, filterAction('Active')).filteredList).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('activeFilter should be Active position', () => {
  expect(rootReducer(initialMockedState, filterAction('Active')).activeFilter).toBe('Active');
});

test('toDo array shouldn`t change after filterMode Completed', () => {
  expect(rootReducer(initialMockedState, filterAction('Completed')).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});

test('In filteredList array should be only undoned items after filterMode Completed', () => {
  expect(rootReducer(initialMockedState, filterAction('Completed')).filteredList).toEqual(
    [{ name: 'drink coffee', isDone: true, ID: 2 }]);
});

test('activeFilter should be Active position', () => {
  expect(rootReducer(initialMockedState, filterAction('Completed')).activeFilter).toBe('Completed');
});

test('@INIT action should return initialMockedState', () => {
  expect(rootReducer(initialMockedState, { type: '@INIT' }).toDo).toEqual(
    [{ name: 'wake up', isDone: false, ID: 1 },
    { name: 'drink coffee', isDone: true, ID: 2 },
    { name: 'do somethink else', isDone: false, ID: 3 }],
  );
});
