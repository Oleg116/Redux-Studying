import React from 'react';
import style from './Todo.module.scss';
// import './toggleStyle.css';

const ToDo = ({
  toDoList, addToDo, removeToDo, resetTodo, makeDone,
}) => {
  const addInputValue = e => {
    if (e.key === 'Enter') {
      addToDo(e.target.value);
      e.target.value = '';
    }
  };
  const removeToDoItem = (className) => {
    const shouldRemove = document.getElementsByClassName(`${className}`)[0].innerHTML;

    removeToDo(shouldRemove);
  };
  const toDoArr = [];
  for (let i = 0; i < toDoList.length; i++) {
    toDoArr.push(toDoList[i].name);
  }

  return (
    <div>
      <input className={style.input} type="text" onKeyPress={e => addInputValue(e)} placeholder="Write to do..." />
      <button className={style.reset} type="button" onClick={() => resetTodo()}>Reset</button>
      <ul>
        {toDoArr.map((element, index) => (
          <li key={index.toString()}>
            <div className={style.resultBox}>
              <input checked={toDoList[index].isDone} type="checkbox" onChange={(e) => makeDone(e.target.value)} value={element} />
              <span
                className={index}
              >
                {element}
              </span>
              <button className={style.deleteSpec} type="button" onClick={() => removeToDoItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <span><input className="active" type="radio" name="status" />Active</span>
      <span><input className='completed' type='radio' name='status' />Completed</span>
      <span><input className='all' type='radio' name='status' />All</span>
    </div>
  );
};

export default ToDo;
