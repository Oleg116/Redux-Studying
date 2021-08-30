import React from 'react';
import classNames from 'classnames';
import style from './Todo.module.scss';

export default function Footer({
  state, defaultFilterStates, setActiveFilter, uncompletedItemsCount, clearCompleted,
}) {
  return (
    <div className={style.buttonsContainer}>
      <p className={style.left}>
        {uncompletedItemsCount}
        &nbsp;Items left
      </p>
      <div className={style.filterBox}>
        {defaultFilterStates.map((buttonName, index) => (
          <button
            key={index}
            className={
              classNames(
                { LdBB3QbOueTN13y56rSK: state === buttonName },
                { Orn5lCjulRFYlTc8NfCz: state !== buttonName },
              )
            }
            type="button"
            onClick={() => setActiveFilter(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
      <button type="button" className={style.clearButton} onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}
