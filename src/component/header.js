import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ num }) => {
  const calculateFactorial = (n) => {
    console.log('Calculating factorial...');
    return n <= 1 ? 1 : n * calculateFactorial(n - 1);
  };

  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return <p>Factorial of {num} is {factorial}</p>;
};

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation num={5} />
    </div>
  );
}
