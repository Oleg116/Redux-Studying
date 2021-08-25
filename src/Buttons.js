import React from 'react';
import style from './Todo.module.scss';

export default function Buttons(buttonsParameters) {
  const { state, defaultFilterStates, methods } = buttonsParameters;
  return (
    <div className={style.buttonBox}>
      {defaultFilterStates.map((buttonName, index) => (
        <button
          disabled={state === buttonName}
          key={index}
          id={buttonName}
          type="button"
          onClick={() => methods[index](buttonName)}
        >
          {buttonName}
        </button>
      ))}
      <button type="button" onClick={methods[3]}>Clear completed</button>
    </div>
  );
}
