import React, { Component } from 'react';
import FamilyContext from '../FamilyContext';
import Grandmother from './Grandmother';

class GreatGrandFather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      xyz: this.spendInheritance
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <div>GreatGrandFather</div>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

export default GreatGrandFather;
