/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo, removeToDo, clearCompleted,
  makeDone, setAllCompleted, setAllUncompleted, showCompleted,
  showActive, showAll, setActiveFilter,
} from './store/counterData/actions';
import ToDo from './ToDo';

const App = ({
  // eslint-disable-next-line react/prop-types
  filteredList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, showCompleted, showActive, showAll, setActiveFilter,
}) => (
  <div>
    <ToDo
      filteredList={filteredList}
      setActiveFilter={setActiveFilter}
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
  filteredList: state.rootReducer.filtered,
  filterState: state.rootReducer.activeFilter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setActiveFilter,
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
