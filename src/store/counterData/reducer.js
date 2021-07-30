const initialState = {
  counter: 0,
  toDo: [],
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
    case 'ADD_TODO':
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter(item => item.name !== action.payload),
      };
    case 'RESET_LIST':
      return {
        ...state,
        toDo: [],
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
