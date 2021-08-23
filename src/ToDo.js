import React from 'react';
import List from './List';
import style from './Todo.module.scss';

const ToDo = ({
  toDoList, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, showCompleted, showActive, showAll,
}) => {
  const uncompletedItemsCount = toDoList.filter(item => !item.isDone).length;
  const addInputValue = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      addToDo(event.target.value);
      event.target.value = '';
    }
  };

  const filter = (event, reduxFunction) => {
    for (let i = 1; i <= 3; i++) {
      event.target.parentNode.children[i].disabled = false;
    }
    event.target.disabled = true;
    reduxFunction();
  };

  const completeToggle = () => {
    for (let i = 0; i < toDoList.length; i++) {
      if (!toDoList[i].isDone) {
        setAllCompleted();
        break;
      } else {
        setAllUncompleted();
      }
    }
  };

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
          <button id="all" type="button" onClick={event => filter(event, showAll)}>All</button>
          <button id="active" type="button" onClick={event => filter(event, showActive)} value="toggled"> Active</button>
          <button id="completed" type="button" onClick={event => filter(event, showCompleted)}>Completed</button>
          <button type="button" onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
