/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo, removeToDo, clearCompleted,
  makeDone, setAllCompleted, setAllUncompleted, showCompleted,
  showActive, showAll,
} from './store/counterData/actions';
import ToDo from './ToDo';

const App = ({
  // eslint-disable-next-line react/prop-types
  toDoList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, showCompleted, showActive, showAll,
}) => (
  <div>
    <ToDo
      toDoList={toDoList}
      filterState={filterState}
      addToDo={addToDo}
      removeToDo={removeToDo}
      clearCompleted={clearCompleted}
      makeDone={makeDone}
      setAllCompleted={setAllCompleted}
      setAllUncompleted={setAllUncompleted}
      showCompleted={showCompleted}
      showActive={showActive}
      showAll={showAll}
    />
  </div>
);

const mapStateToProps = (state) => ({
  toDoList: state.rootReducer.filtered,
  filterState: state.rootReducer.filterPosition,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addToDo,
    removeToDo,
    clearCompleted,
    makeDone,
    setAllCompleted,
    setAllUncompleted,
    showCompleted,
    showActive,
    showAll,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
