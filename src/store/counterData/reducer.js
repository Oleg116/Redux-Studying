const initialState = {
  toDo: [],
  filteredList: [],
  activeFilter: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDo: [...state.toDo,
        { name: action.payload, isDone: false, ID: action.ID }],
        filteredList: [...state.filteredList,
        { name: action.payload, isDone: false, ID: action.ID }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDo: state.toDo.filter((item) => item.ID !== action.payload),
        filteredList: state.toDo.filter((item) => item.ID !== action.payload),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.filter(item => !item.isDone),
        filteredList: state.filteredList.filter(item => !item.isDone),
      };
    case 'READY_TOGLE':
      return {
        ...state,
        toDo: state.toDo.map(element => {
          if (element.ID === action.payload) {
            return {
              name: element.name,
              isDone: !element.isDone,
              ID: element.ID,
            };
          }
          return {
            name: element.name,
            isDone: element.isDone,
            ID: element.ID,
          };
        }),
        filteredList: state.toDo.map(element => {
          if (element.ID === action.payload) {
            return {
              name: element.name,
              isDone: !element.isDone,
              ID: element.ID,
            };
          }
          return {
            name: element.name,
            isDone: element.isDone,
            ID: element.ID,
          };
        }),
      };
    case 'SET_ALL_COMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: true,
          ID: item.ID,
        })),
        filteredList: state.toDo.map(item => ({
          name: item.name,
          isDone: true,
          ID: item.ID,
        })),
        activeFilter: 'All',
      };
    case 'SET_ALL_UNCOMPLETED':
      return {
        ...state,
        toDo: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
          ID: item.ID,
        })),
        filteredList: state.toDo.map(item => ({
          name: item.name,
          isDone: false,
          ID: item.ID,
        })),
        activeFilter: 'All',
      };

    case 'SET_ACTIVE_FILTER':
      if (action.payload === 'All') {
        return {
          ...state,
          filteredList: state.toDo,
          activeFilter: action.payload,
        };
      } if (action.payload === 'Active') {
        return {
          ...state,
          filteredList: state.toDo.filter(item => !item.isDone),
          activeFilter: action.payload,
        };
      }
      return {
        ...state,
        activeFilter: action.payload,
        filteredList: state.toDo.filter(item => item.isDone),
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        toDo: state.toDo.reduce((newToDoArr, toDoItem) => {
          if (toDoItem.ID === action.ID) {
            newToDoArr.push({
              name: action.payload,
              isDone: toDoItem.isDone,
              ID: toDoItem.ID,
            });
          } else {
            newToDoArr.push({
              name: toDoItem.name,
              isDone: toDoItem.isDone,
              ID: toDoItem.ID,
            });
          }
          return newToDoArr;
        }, []),
        filteredList: state.filteredList.reduce((newToDoArr, toDoItem) => {
          if (toDoItem.ID === action.ID) {
            newToDoArr.push({
              name: action.payload,
              isDone: toDoItem.isDone,
              ID: toDoItem.ID,
            });
          } else {
            newToDoArr.push({
              name: toDoItem.name,
              isDone: toDoItem.isDone,
              ID: toDoItem.ID,
            });
          }
          return newToDoArr;
        }, []),
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
