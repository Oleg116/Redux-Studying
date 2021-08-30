import React from 'react';
import Footer from './Footer';
import InputField from './InputField';
import List from './List';
import style from './Todo.module.scss';

const ToDo = ({
  filteredList, filterState, addToDo, removeToDo, clearCompleted, makeDone,
  setAllCompleted, setAllUncompleted, setActiveFilter,
}) => {
  const uncompletedItemsCount = filteredList.filter(item => !item.isDone).length;
  const addInputValue = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      addToDo(event.target.value);
      event.target.value = '';
    }
  };

  const completeToggle = () => {
    if (filteredList.every(item => item.isDone)) {
      setAllUncompleted();
    } else {
      setAllCompleted();
    }
  };
  const defaultFilterStates = ['All', 'Active', 'Completed'];
  return (
    <div className={style.todoApp}>
      <p className={style.jumbotron}>todos</p>
      <InputField
        completeToggle={completeToggle}
        addInputValue={addInputValue}
        setActiveFilter={setActiveFilter}
      />
      <div className={style.toDoList}>
        <List ToDoArray={filteredList} removeToDo={removeToDo} makeDone={makeDone} />
        <Footer
          state={filterState}
          clearCompleted={clearCompleted}
          defaultFilterStates={defaultFilterStates}
          setActiveFilter={setActiveFilter}
          uncompletedItemsCount={uncompletedItemsCount}
        />
      </div>
    </div>
  );
};

export default ToDo;
