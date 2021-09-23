import React from 'react';
import classNames from 'classnames';
import style from './Todo.module.scss';

export default function Footer({
  state, defaultFilterStates, setActiveFilter, uncompletedItemsCount, clearCompleted,
}) {
  const { active, defaultButton } = style;
  return (
    <div className={style.buttonsContainer}>
      <p className={style.left}>
        {uncompletedItemsCount}
        {' '}
        Items left
      </p>
      <div className={style.filterBox}>
        {defaultFilterStates.map((buttonName, index) => (
          <button
            key={index}
            id={buttonName}
            className={classNames(state === buttonName ? active : defaultButton)}
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
