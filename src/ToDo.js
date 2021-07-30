/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import style from './Todo.module.scss';

const ToDo = ({
  toDoList, addToDo, removeToDo, resetTodo,
}) => {
  const addInputValue = () => {
    const input = document.getElementsByClassName(`${style.input}`)[0];
    if (input.value !== '') {
      addToDo(input.value);
    }
    input.value = '';
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
      <input className={style.input} type="text" placeholder="Write to do..." />
      <button className={style.submit} type="button" onClick={() => addInputValue()}>Submit</button>
      <button className={style.reset} type="button" onClick={() => resetTodo()}>Reset</button>
      <ul>
        {toDoArr.map((element, index) => (
          <li>
            <div className={style.resultBox}>
              <span>{index}</span>
              <span className={style.result} className={index}>{element}</span>
              <button className={style.deleteSpec} type="button" onClick={() => removeToDoItem(index)}>remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
