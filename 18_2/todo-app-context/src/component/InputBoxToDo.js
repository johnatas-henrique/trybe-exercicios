import React, { useContext } from 'react';
import TodoContext from '../TodoContext';

const InputBoxToDo = () => {
  const { inputToDo, addToDo, handleChange } = useContext(TodoContext);
  return (
    <div>
      <h1>To-do List</h1>
      <div>
        {JSON.stringify(useContext(TodoContext))}
        </div>
      <input
        name="inputToDo"
        onChange={(e) => handleChange(e)}
        value={inputToDo}
      />
      <button
        type="button"
        onClick={addToDo}
      >
        Adicione sua tarefa
          </button>
    </div>
  );
};

export default InputBoxToDo;
