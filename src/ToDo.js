import React from 'react';
import Buttons from './Buttons';
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
      <div className={style.inputField}>
        <button className={style.setAll} type="button" onClick={completeToggle}>{'>'}</button>
        <input className={style.input} type="text" onKeyPress={addInputValue} placeholder="What needs to be done?" />
      </div>
      <div className={style.toDoList}>
        <List ToDoArray={toDoList} removeToDo={removeToDo} makeDone={makeDone} />
        <div className={style.buttonsContainer}>
          <p className={style.left}>
            {uncompletedItemsCount}
            Items left
          </p>
          <Buttons
            state={filterState}
            defaultFilterStates={defaultFilterStates}
            methods={defaultFilterMethods}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
