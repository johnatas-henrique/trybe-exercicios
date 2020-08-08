import React, { Component } from 'react';
import TodoContext from './TodoContext';
import InputBoxToDo from './component/InputBoxToDo';
import DisplayToDo from './component/DisplayToDo';

class TodoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputToDo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  addToDo() {
    const newToDo = { name: this.state.inputToDo, type: 'active' };
    this.setState((prevState) => ({ 
      inputToDo: '',  
      todo: [...prevState.todo, newToDo]
    }))
  }

  render() {
    const contextValue = {
      todo: this.state.todo,
      inputToDo: this.state.inputToDo,
      handleChange: this.handleChange,
      addToDo: this.addToDo,
    }
    return (
      <TodoContext.Provider value={contextValue}>
        <InputBoxToDo />
        <DisplayToDo />
      </TodoContext.Provider>
    )
  }

}

export default TodoProvider;
