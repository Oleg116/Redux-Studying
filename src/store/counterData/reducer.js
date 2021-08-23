const initialState = {
  toDo: [],
  filtered: [],
  filterMode: item => !item.isDone,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
        filtered: [...state.toDo, action.payload].filter(state.filterMode),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter((_, index) => index !== action.payload),
        filtered: state.toDo.filter((_, index) => index !== action.payload).filter(state.filterMode),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.filter(item => !item.isDone),
        filtered: state.filtered.filter(item => !item.isDone),
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
        filtered: state.toDo.map((element, index) => {
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
        filtered: state.toDo.map(item => ({
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
        filtered: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
        })),
      };
    case 'FILTER_LIST':
      return {
        ...state,
        filtered: state.toDo.filter(action.payload),
      };
    // case 'SHOW_ACTIVE':
    //   return {
    //     ...state,
    //     filtered: state.toDo.filter(action.payload),
    //   };
    // case 'SHOW_ALL':
    //   return {
    //     ...state,
    //     filtered: state.toDo.filter(action.payload),
    //   };
    default: {
      return state;
    }
  }
}

export default rootReducer;
