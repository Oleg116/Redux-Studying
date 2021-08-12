const initialState = {
  toDo: [],
  toDoBoofer: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
        // toDoBoofer: state.toDo,
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter((item, index) => index !== action.payload),
        // toDoBoofer: state.toDo,
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.filter(item => !item.isDone),
        // toDoBoofer: state.toDo,
      };
    case 'READY_TOGLE':
      return {
        ...state,
        toDo: state.toDo.map((element, index) => {
          if (index === action.payload) {
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
        // toDoBoofer: state.toDo,
      };
    case 'SET_ALL_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: true,
        })),
        // toDoBoofer: state.toDo,
      };
    case 'SET_ALL_UNCOMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
        })),
        // toDoBoofer: state.toDo,
      };
    // case 'SHOW_COMPLETED':
    //   return {
    //     ...state,
    //     toDoBoofer: state.toDo,
    //     toDo: state.toDo.filter(item => item.isDone),
    //   };
    // case 'SHOW_ACTIVE':
    //   return {
    //     ...state,
    //     toDoBoofer: state.toDo,
    //     toDo: state.toDoBoofer,
    //   };
    case 'SHOW_ALL':
      return {
        ...state,
        toDoBoofer: state.todo,
        toDo: state.toDo,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
