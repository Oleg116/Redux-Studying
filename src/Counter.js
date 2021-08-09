import React from 'react';


// eslint-disable-next-line react/prop-types
const Counter = ({ counter, increment, decrement }) => (
  <div>
    <button className={style.btn_decrease} type="button" onClick={() => decrement(counter)}>Decrease</button>
    <h3 className={style.result}>{counter}</h3>
    <button className={style.btn_increase} type="button" onClick={() => increment(counter)}>Increase</button>
  </div>
);

export default Counter;
