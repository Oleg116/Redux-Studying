const initialState = {
  toDo: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
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
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.filter(item => !item.isDone),
      };
    case 'READY_TOGLE':
      return {
        ...state,
        toDo: state.toDo.map(element => {
          if (element.name === action.payload) {
            return {
              name: element.name,
              isDone: !element.isDone,
            };
          }
          return {
            name: element.name,
            isDone: element.isDone,
          };
        }),

      };
    case 'SET_ALL_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: true,
        })),
      };
    case 'SET_ALL_UNCOMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
        })),
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
