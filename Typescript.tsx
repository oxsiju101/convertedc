//code 01

// import React from "react";

// I Defined the type of the props the component receives Below

interface GreetingProps {
  name: string; // This means that the 'name' must be a string or our code throws an error
}

// I passed in the props type here.

const Greeting = ({ name = "Samuel" }: GreetingProps) => {
  return <>Hello, {name}!</>;
};

//export default Greeting;

//code 02

import React from "react";

// I Define the interfaces for props and state
interface CounterProps {} // No props used here
interface CounterState {
  count: number; //This means that the 'count' must be a number or our code throws an error
}

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
