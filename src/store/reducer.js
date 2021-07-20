const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  let counter;
  switch (action.type) {
    case 'INCREASE_COUNTER':
      counter = state.counter + 1;
      // console.log(action);
      return {
        counter,
      };
    case 'DECREASE_COUNTER':
      // console.log(action);
      counter = state.counter - 1;
      return {
        counter,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
