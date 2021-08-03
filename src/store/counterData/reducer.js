const initialState = {
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
        toDo: action.payload,
      };
    case 'READY_TOGLE':
      return {
        ...state,
        toDo: state.toDo.map(item => {
          if (item.name === action.payload) {
            return {
              name: item.name,
              isDone: !item.isDone,
            };
          }
          return {
            name: item.name,
            isDone: item.isDone,
          };
        }),
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
