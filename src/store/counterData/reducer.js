const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        ...state,
        counter: action.payload,
      };
    case 'DECREASE_COUNTER':
      return {
        ...state,
        counter: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
