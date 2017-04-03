import React, { Component } from "react";
import BootstrapButton from 'react-bootstrap/lib/Button';
// write code here to add a decrement button and method to handle the decrement

// hint: Basically the same thing as how Increment is being used
class Button extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  }  
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <BootstrapButton bsStyle="primary" onClick={this.handleIncrement}>Increment</BootstrapButton>
        <BootstrapButton bsStyle="danger" onClick={this.handleDecrement}>Decrement</BootstrapButton>
      </div>
    );
  }
}

export default Button;
