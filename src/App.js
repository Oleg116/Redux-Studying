import React, { useState } from 'react';
import style from './App.module.scss';
import store from './store/index';

const App = () => {
  const [count, setCount] = useState(store.getState().reducer.counter);
  const changeState = (typeData) => {
    setCount(count + 1);
    store.dispatch({ type: typeData });
  };
  return (
    <div>
      <button className={style.btn_increase} type="button" onClick={() => changeState('INCREASE_COUNTER')}>Increase</button>
      <button className={style.btn_decrease} type="button" onClick={() => changeState('DECREASE_COUNTER')}>Decrease</button>
      <h3 className={style.result}>{store.getState().reducer.counter}</h3>
    </div>
  );
};

export default App;
