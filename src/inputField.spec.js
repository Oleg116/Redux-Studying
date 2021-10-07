import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jest } from '@jest/globals';
import InputField from './InputField';
import {
  addToDo, setActiveFilter, setAllCompleted, setAllUncompleted,
} from './store/counterData/actions';

configure({ adapter: new Adapter() });

const filteredList = [
  { name: 'Wake up', isDone: false, ID: 1 },
  { name: 'Drink coffee', isDone: false, ID: 2 },
  { name: 'To do something', isDone: true, ID: 3 },
  { name: 'To do something else', isDone: false, ID: 4 },
  { name: 'Go sleep', isDone: false, ID: 5 },
];

const completeToggle = () => {
  if (filteredList.every(item => item.isDone)) {
    setAllUncompleted();
  } else {
    setAllCompleted();
  }
};
const input = shallow(
  <InputField
    completeToggle={completeToggle}
    addToDo={addToDo}
    setActiveFilter={setActiveFilter}
  />,
);

// test('Complete toggle should call setAllCompleted, couse here is 1 mocked doned item',
//   () => {
//     expect(completeToggle()).toBe('setAllCompleted()');
//   });

test('completeToggle() should be called 1 time', () => {
  const testFunc = jest.fn();
  input.find('button').simulate('click');
  expect(completeToggle(testFunc)).toHaveBeenCalledTimes(1);
});
