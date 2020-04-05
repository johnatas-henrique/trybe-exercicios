import React from 'react';
import TodoContext from '../TodoContext';

const InputBoxToDo = () => {
  return (
    <TodoContext.Consumer>
      {context => (
        <div>
          <h1>To-do List</h1>
          <div>{JSON.stringify(context)}</div>
          <input
            name="inputToDo"
            onChange={(e) => context.handleChange(e)}
            value={context.inputToDo}
          />
          <button
          type="button"
          onClick={context.addToDo}
        >
          Adicione sua tarefa
        </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

export default InputBoxToDo;
