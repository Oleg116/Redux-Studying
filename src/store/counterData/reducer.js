const initialState = {
  toDo: [],
  filtered: [],
  activeFilter: 'All',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
        filtered: [...state.filtered, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter((_, index) => index !== action.payload),
        filtered: state.toDo.filter((_, index) => index !== action.payload),
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
        activeFilter: 'All',
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
        activeFilter: 'All',
      };

    case 'SET_ACTIVE_FILTER':
      if (action.payload === 'All') {
        return {
          ...state,
          filtered: state.toDo,
          activeFilter: action.payload,
        };
      } if (action.payload === 'Active') {
        return {
          ...state,
          filtered: state.toDo.filter(item => !item.isDone),
          activeFilter: action.payload,
        };
      }
      return {
        ...state,
        activeFilter: action.payload,
        filtered: state.toDo.filter(item => item.isDone),
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
