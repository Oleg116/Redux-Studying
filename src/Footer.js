import React from 'react';
import cnBind from 'classnames/bind';
import style from './Todo.module.scss';

const cx = cnBind.bind(style);

export default function Footer({
  state, defaultFilterStates, setActiveFilter, uncompletedItemsCount, clearCompleted,
}) {
  return (
    <div className={style.buttonsContainer}>
      <p className={style.left}>
        {uncompletedItemsCount}
        &nbsp; Items left
      </p>
      <div className={style.filterBox}>
        {defaultFilterStates.map((buttonName, index) => (
          <button
            key={index}
            className={cx({ active: state === buttonName, defaultButton: true })}
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
