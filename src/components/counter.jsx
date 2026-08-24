import React from 'react'
import header
const counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default counter;

/*import React from 'react'

const counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// export default counter*/



/*import { useState } from "react";

const App = () => {
    const [number, setnumber] = useState([1, 2, 3, 4, 5]);

    const addTwo = () => {
        <h2>list of numbers</h2>
        setnumber(number.map(num => num + 2));
    };

    return (
        <div>
            <h2>{number}</h2>

            <button onClick={addTwo}>
                Add 2
            </button>
        </div>
    );
};

export default App;*/