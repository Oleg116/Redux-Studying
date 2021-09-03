import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo, removeToDo, clearCompleted, editItem,
  makeDone, setAllCompleted, setAllUncompleted, setActiveFilter,
} from './store/counterData/actions';
import ToDo from './ToDo';

const App = ({
  filteredList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, setActiveFilter, editItem,
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
      editItem={editItem}
    />
  </div>
);

const mapStateToProps = (state) => ({
  filteredList: state.rootReducer.filteredList,
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
    editItem,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
