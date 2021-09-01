import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import style from './Todo.module.scss';

export default function InputField(methods) {
  const { completeToggle, addToDo, setActiveFilter } = methods;
  const toggleAllItems = () => {
    completeToggle();
    setActiveFilter('All');
  };

  const addItemToTheTodo = event => {
    const itemID = Math.round(Math.random() * 100000);
    if (event.key === 'Enter' && event.target.value !== '') {
      addToDo(event.target.value, itemID);
      setActiveFilter('All');
      event.target.value = '';
    }
  };

  return (
    <div className={style.inputField}>
      <button
        className={style.setAll}
        type="button"
        onClick={toggleAllItems}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <input className={style.input} type="text" onKeyPress={addItemToTheTodo} placeholder="What needs to be done?" />
    </div>
  );
}
