import React from 'react';
import style from './Todo.module.scss';

const ToDo = ({
  toDoList, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, showCompleted, showActive, showAll,
}) => {
  const left = toDoList.filter(item => !item.isDone).length;
  const addInputValue = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      addToDo(e.target.value);
      e.target.value = '';
    }
  };
  const removeToDoItem = (event) => {
    const shouldRemove = Number(event.target.parentNode.children[1].classList.value);
    removeToDo(shouldRemove);
  };

  const filter = (event, reduxFunc) => {
    for (let i = 1; i <= 3; i++) {
      event.target.parentNode.children[i].disabled = false;
    }
    event.target.disabled = true;
    reduxFunc();
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
        <button className={style.setAll} type="button" onClick={() => completeToggle()}>{'>'}</button>
        <input className={style.input} type="text" onKeyPress={addInputValue} placeholder="What needs to be done?" />
      </div>
      <div className={style.toDoList}>
        <ul>
          {toDoList.map((element, index) => (
            <li className={style.todoItem} key={index.toString()}>
              <input className={style.resultBox} checked={toDoList[index].isDone} type="checkbox" onChange={(e) => makeDone(Number(e.target.value))} value={index} />
              <span
                className={index}
              >
                {element.name}
              </span>
              <button className={style.deleteSpec} type="button" onClick={removeToDoItem}>X</button>
            </li>
          ))}
        </ul>
        <div className={style.buttonsContainer}>
          <p className={style.left}>
            {`${left} `}
            Items left
          </p>
          <button id="all" type="button" onClick={() => filter(event, showAll)}>All</button>
          <button id="active" type="button" onClick={() => filter(event, showActive)}> Active</button>
          <button id="completed" type="button" onClick={() => filter(event, showCompleted)}>Completed</button>
          <button type="button" onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
