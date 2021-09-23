import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
import { removeToDo, editItem, makeDone } from './store/counterData/actions';

configure({ adapter: new Adapter() });
const filteredList = [
  { name: 'Wake up', isDone: false, ID: 1 },
  { name: 'Drink coffee', isDone: false, ID: 2 },
  { name: 'To do something', isDone: true, ID: 3 },
  { name: 'To do something else', isDone: false, ID: 4 },
  { name: 'Go sleep', isDone: false, ID: 5 },
];

const ListContainer = shallow(
  <List
    filteredList={filteredList}
    removeToDo={removeToDo}
    makeDone={makeDone}
    editItem={editItem}
  />,
);
test('Component should show 5 list items', () => {
  expect(ListContainer.find('li').length).toBe(5);
});

test('All list elements should be at read only mode', () => {
  ListContainer.find('ul').forEach((node) => {
    expect(node.childAt(1).childAt(1).prop('readOnly')).toEqual(true);
  });
});

test('All element except third should be unchecked', () => {
  // console.log(ListContainer.find('ul').childAt(0).childAt(0).prop('checked').debug())
  expect(ListContainer.find('ul').childAt(0).childAt(0).prop('checked')).toBe(false);
  expect(ListContainer.find('ul').childAt(1).childAt(0).prop('checked')).toBe(false);
  expect(ListContainer.find('ul').childAt(2).childAt(0).prop('checked')).toBe(true);
  expect(ListContainer.find('ul').childAt(3).childAt(0).prop('checked')).toBe(false);
  expect(ListContainer.find('ul').childAt(4).childAt(0).prop('checked')).toBe(false);
});

test('After click on items with checked=false, it should switch to true', () => {
  expect(expect(ListContainer.find('ul').childAt(0).childAt(1).prop('readOnly')).toBe(true));
  ListContainer.find('ul').childAt(0).childAt(1).simulate('dblclick', { target: ListContainer.find('ul').childAt(0).childAt(1) });
  expect(ListContainer.find('ul').childAt(0).childAt(1).prop('readOnly')).toBe(true);
});
