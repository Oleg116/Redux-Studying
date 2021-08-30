import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo, removeToDo, clearCompleted,
  makeDone, setAllCompleted, setAllUncompleted, setActiveFilter,
} from './store/counterData/actions';
import ToDo from './ToDo';

const App = ({
  filteredList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, setActiveFilter,
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
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
