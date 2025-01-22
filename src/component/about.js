import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle State</button>
    </div>
  );
};

export default Counter;
