/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increment, decrement, addToDo, removeToDo, resetTodo, makeDone,
} from './store/counterData/actions';
import Counter from './Counter';
import ToDo from './ToDo';

const App = ({
  // eslint-disable-next-line react/prop-types
  counter, toDoList, increment, decrement, addToDo, removeToDo, resetTodo, makeDone,
}) => (
  <div>
    {/* <Counter counter={counter} increment={increment} decrement={decrement} /> */}
    <ToDo
      toDoList={toDoList}
      addToDo={addToDo}
      removeToDo={removeToDo}
      resetTodo={resetTodo}
      makeDone={makeDone}
    />
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
    makeDone,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
