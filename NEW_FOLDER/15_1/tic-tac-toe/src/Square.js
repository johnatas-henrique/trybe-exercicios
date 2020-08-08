import React from "react";

class Square extends React.Component {
    render(){
        return (
          <button 
          data-testid={this.props.datatest}
          className="square" 
          onClick={this.props.onClick}
          >
            {this.props.value}
          </button>
        );
    }
}

export default Square;
