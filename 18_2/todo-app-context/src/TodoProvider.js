import React, { useState } from 'react';
import TodoContext from './TodoContext';

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [inputToDo, setInputToDo] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputToDo(value);
  }

  const addToDo = () => {
    const newToDo = { name: inputToDo, type: 'active' };
    setTodo([...todo, newToDo]);
    setInputToDo('');
  }

  const contextValue = {
    todo,
    inputToDo,
    handleChange,
    addToDo
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
};

export default TodoProvider;
