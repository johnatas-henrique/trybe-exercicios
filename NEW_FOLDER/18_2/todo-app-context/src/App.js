import React from 'react';
import './App.css';
import TodoProvider from './TodoProvider';
import InputBoxToDo from './component/InputBoxToDo';
import DisplayToDo from './component/DisplayToDo';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <InputBoxToDo />
        <DisplayToDo />
      </TodoProvider>
    </div>
  );
}

export default App;
