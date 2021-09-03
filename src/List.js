import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './Todo.module.scss';

export default function List(props) {
  const { filteredList, removeToDo, makeDone } = props;
  return (
    <ul>
      {filteredList.map((element, index) => (
        <li className={style.todoItem} key={index}>
          <input className={style.resultBox} checked={filteredList[index].isDone} type="checkbox" onChange={() => makeDone(element.ID)} value={index} />
          <span className={{ crossed: element.isDone }}>{element.name}</span>
          <button
            className={style.deleteSpec}
            type="button"
            onClick={() => removeToDo(element.ID)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      ))}
    </ul>
  );
}
