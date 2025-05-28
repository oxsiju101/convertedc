//Code 01 :

import React from "react";

// This is a simple React component that displays a greeting message
const Greeting = ({ name= 'sju' }) => {
  return <div>Hello, {name}!</div>;
};

// export default Greeting;


// Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return 
    ( <div> 
      <p>Count: {this.state.count}</p> 
      <button onClick={this.increment}>Increment</button> 
    </div> );
  }
} 
export default Counter;
