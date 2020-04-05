import React from 'react';
import TodoContext from '../TodoContext';

const DisplayToDo = () => {
  return (
    <TodoContext.Consumer>
      {context => (
        <div>
          <h2>Display To-Do's</h2>
          <div>{JSON.stringify(context)}</div>
          <ul>
            {context.todo.map(work =>
              <li
                key={`${work.name}-${Math.random()}`}
              >
                {work.name}
              </li>
            )}
          </ul>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

export default DisplayToDo;
