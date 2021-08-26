import React from 'react';
import style from './Todo.module.scss';

export default function InputField(methods) {
  const { completeToggle, addInputValue } = methods;
  return (
    <div className={style.inputField}>
      <button className={style.setAll} type="button" onClick={completeToggle}>{'>'}</button>
      <input className={style.input} type="text" onKeyPress={addInputValue} placeholder="What needs to be done?" />
    </div>
  );
}
