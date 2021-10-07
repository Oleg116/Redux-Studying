import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cnBind from 'classnames/bind';
import style from './Todo.module.scss';

const cx = cnBind.bind(style);

export default function List({
  filteredList, removeToDo, makeDone, editItem,
}) {
  const itemEdit = event => {
    event.target.readOnly = false;
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.target.readOnly = true;
    }
  };
  return (
    <ul>
      {filteredList.map((element, index) => (
        <li className={style.todoItem} key={index}>
          <input className={style.resultBox} checked={filteredList[index].isDone} type="checkbox" onChange={() => makeDone(element.ID)} value={index} />
          <input
            onDoubleClick={itemEdit}
            onKeyPress={handleKeyPress}
            onChange={event => { editItem(event, element.ID); }}
            className={cx({ crossed: filteredList[index].isDone, defaultItem: true })}
            value={element.name}
            readOnly
          />
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
