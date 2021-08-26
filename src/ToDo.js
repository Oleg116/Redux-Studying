import React from 'react';
import Footer from './Footer';
import InputField from './InputField';
import List from './List';
import style from './Todo.module.scss';

const ToDo = ({
  toDoList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, showCompleted, showActive, showAll,
}) => {
  const uncompletedItemsCount = toDoList.filter(item => !item.isDone).length;
  const addInputValue = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      addToDo(event.target.value);
      event.target.value = '';
    }
  };

  const completeToggle = () => {
    if (toDoList.every(item => item.isDone)) {
      setAllUncompleted();
    } else {
      setAllCompleted();
    }
  };
  const defaultFilterStates = ['All', 'Active', 'Completed'];
  const defaultFilterMethods = [showAll, showActive, showCompleted, clearCompleted];
  return (
    <div className={style.todoApp}>
      <p className={style.jumbotron}>todos</p>
      <InputField completeToggle={completeToggle} addInputValue={addInputValue} />
      <div className={style.toDoList}>
        <List ToDoArray={toDoList} removeToDo={removeToDo} makeDone={makeDone} />
        <Footer
          state={filterState}
          defaultFilterStates={defaultFilterStates}
          methods={defaultFilterMethods}
          uncompletedItemsCount={uncompletedItemsCount}
        />
      </div>
    </div>
  );
};

export default ToDo;
