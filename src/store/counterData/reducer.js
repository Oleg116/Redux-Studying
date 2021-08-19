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
        toDoBoofer: [...state.toDo, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter((_, index) => index !== action.payload),
        toDoBoofer: state.toDo.filter((_, index) => index !== action.payload),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.filter(item => !item.isDone),
        toDoBoofer: state.toDo.filter(item => !item.isDone),
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
        toDoBoofer: state.toDo.map((element, index) => {
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
      };
    case 'SET_ALL_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: true,
        })),
        toDoBoofer: state.toDo.map(item => ({
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
        toDoBoofer: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
        })),
      };
    case 'SHOW_COMPLETED':
      return {
        ...state,
        toDo: state.toDoBoofer.filter(item => item.isDone),
      };
    case 'SHOW_ACTIVE':
      return {
        ...state,
        toDoBoofer: state.toDo,
        toDo: state.toDoBoofer.filter(item => !item.isDone),
      };
    case 'SHOW_ALL':
      return {
        ...state,
        toDo: state.toDoBoofer,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
