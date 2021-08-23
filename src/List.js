import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './Todo.module.scss';

export default function List(props) {
  const { ToDoArray, removeToDo, makeDone } = props;
  return (
    <ul>
      {ToDoArray.map((element, index) => (
        <li className={style.todoItem} key={index}>
          <input className={style.resultBox} checked={ToDoArray[index].isDone} type="checkbox" onChange={() => makeDone(index)} value={index} />
          <span>{element.name}</span>
          <button
            className={style.deleteSpec}
            type="button"
            onClick={() => removeToDo(index)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      ))}
    </ul>
  );
}
