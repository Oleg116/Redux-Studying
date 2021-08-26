import React from 'react';
import style from './Todo.module.scss';

export default function Footer(buttonsParameters) {
  const { state, defaultFilterStates, methods, uncompletedItemsCount } = buttonsParameters;
  return (
    <div className={style.buttonsContainer}>
      <p className={style.left}>
        {uncompletedItemsCount}
        Items left
      </p>
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
