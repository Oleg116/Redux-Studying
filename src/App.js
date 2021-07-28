/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './App.module.scss';
import { increment, decrement } from './store/counterData/actions';

// eslint-disable-next-line react/prop-types
const App = ({ counter, increment, decrement }) => (
  <div>
    <button
      className={style.btn_increase}
      type="button"
      onClick={() => increment(counter)}
    >
      Increase
    </button>
    <button
      className={style.btn_decrease}
      type="button"
      onClick={() => decrement(counter)}
    >
      Decrease
    </button>
    <h3 className={style.result}>{counter}</h3>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.rootReducer.counter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    increment,
    decrement,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
