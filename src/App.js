/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increment, decrement, addToDo, removeToDo, resetTodo,
} from './store/counterData/actions';
import Counter from './Counter';
import ToDo from './ToDo';

const App = ({
  // eslint-disable-next-line react/prop-types
  counter, toDoList, increment, decrement, addToDo, removeToDo, resetTodo,
}) => (
  <div>
    <Counter counter={counter} increment={increment} decrement={decrement} />
    <ToDo toDoList={toDoList} addToDo={addToDo} removeToDo={removeToDo} resetTodo={resetTodo} />
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.rootReducer.counter,
  toDoList: state.rootReducer.toDo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    increment,
    decrement,
    addToDo,
    removeToDo,
    resetTodo,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
