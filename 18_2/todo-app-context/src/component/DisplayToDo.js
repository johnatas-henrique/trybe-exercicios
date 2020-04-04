import React, { useContext } from 'react';
import TodoContext from '../TodoContext';

const DisplayToDo = () => {
  const { todo } = useContext(TodoContext);
  return (
        <div>
          <h1>Display To-Do's</h1>
          <div>{JSON.stringify(useContext(TodoContext))}</div>
          <ul>
            {todo.map(work =>
              <li
                key={`${work.name}-${Math.random()}`}
              >
                {work.name}
              </li>
            )}
          </ul>
        </div>
  );
};

export default DisplayToDo;
