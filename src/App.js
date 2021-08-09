/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increment, decrement, addToDo, removeToDo, clearCompleted, makeDone, setAllCompleted, setAllUncompleted,
} from './store/counterData/actions';
import ToDo from './ToDo';

const App = ({
  // eslint-disable-next-line react/prop-types
  toDoList, addToDo, removeToDo, clearCompleted, makeDone, setAllCompleted, setAllUncompleted,
}) => (
  <div>
    {/* <Counter counter={counter} increment={increment} decrement={decrement} /> */}
    <ToDo
      toDoList={toDoList}
      addToDo={addToDo}
      removeToDo={removeToDo}
      clearCompleted={clearCompleted}
      makeDone={makeDone}
      setAllCompleted={setAllCompleted}
      setAllUncompleted={setAllUncompleted}
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
    clearCompleted,
    makeDone,
    setAllCompleted,
    setAllUncompleted,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
