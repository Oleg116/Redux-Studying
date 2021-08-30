import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import style from './Todo.module.scss';

export default function InputField(methods) {
  const { completeToggle, addInputValue, setActiveFilter } = methods;
  return (
    <div className={style.inputField}>
      <button
        className={style.setAll}
        type="button"
        onClick={() => { completeToggle(); setActiveFilter('All'); }}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <input className={style.input} type="text" onKeyPress={event => { addInputValue(event); setActiveFilter('All'); }} placeholder="What needs to be done?" />
    </div>
  );
}
