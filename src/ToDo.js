import React from 'react';
import style from './Todo.module.scss';

const ToDo = ({
  toDoList, addToDo, removeToDo, clearCompleted, makeDone, setAllCompleted, setAllUncompleted
}) => {
  const left = toDoList.filter(item => !item.isDone).length;
  const list = document.getElementsByClassName('toDoList')[0]

  const addInputValue = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      addToDo(e.target.value);
      e.target.value = '';
    }
  };
  const removeToDoItem = (className) => {
    const shouldRemove = document.getElementsByClassName(`${className}`)[0].innerHTML;

    removeToDo(shouldRemove);
  };
  let toDoArr = [];
  for (let i = 0; i < toDoList.length; i++) {
    toDoArr.push(toDoList[i].name);
  }
  const completeToggle = () => {
    for (let i = 0; i < toDoList.length; i++) {
      if (!toDoList[i].isDone) {

        setAllCompleted()
        break
      } else {
        setAllUncompleted()
      }
    }
  }
  return (
    <div className={style.todoApp}>
      <p className={style.jumbotron}>todos</p>
      <div className={style.inputField}>
        <button className={style.setAll} type="button" onClick={() => completeToggle()}>></button>
        <input className={style.input} type="text" onKeyPress={addInputValue} placeholder="Write to do..." />
      </div>
      <div className='toDoList' className={style.toDoList}>
        <ul>
          {toDoArr.map((element, index) => (
            <li key={index.toString()}>
              <div className={style.todoItem}>
                <input className={style.resultBox} checked={toDoList[index].isDone} type="checkbox" onChange={(e) => makeDone(e.target.value)} value={element} />
                <span
                  className={index}
                >
                  {element}
                </span>
                <button className={style.deleteSpec} type="button" onClick={() => removeToDoItem(index)}>X</button>
              </div>
            </li>
          ))}
        </ul>
        <span className={style.left}>{left} Items left</span>
        <button>All</button>
        <button> Active</button>
        <button>Completed</button>
        <button type="button" onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default ToDo;
