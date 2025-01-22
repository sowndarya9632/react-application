import React, { useState, useCallback, createContext, useContext, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Home Component
const Home = () => <h1>Welcome to the Home Page!</h1>;

// About Component
const About = () => <h1>About Us</h1>;

// Contact Component
const Contact = () => <h1>Contact Us</h1>;

// Counter Component
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

// ThemedComponent with Context
const ThemeContext = createContext();

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme.background, color: theme.color }}>Themed Content</div>;
};

// Expensive Calculation Component
const ExpensiveCalculation = ({ num }) => {
  const calculateFactorial = (n) => {
    console.log('Calculating factorial...');
    return n <= 1 ? 1 : n * calculateFactorial(n - 1);
  };

  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return <p>Factorial of {num} is {factorial}</p>;
};

// Main App Component
const App = () => {
  const theme = { background: 'black', color: 'white' };
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/themed">Themed Component</Link>
          </li>
          <li>
            <Link to="/factorial">Factorial</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route 
          path="/themed" 
          element={
            <ThemeContext.Provider value={theme}>
              <ThemedComponent />
            </ThemeContext.Provider>
          } 
        />
        <Route 
          path="/factorial" 
          element={
            <div>
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <ExpensiveCalculation num={5} />
            </div>
          } 
        />
      </Routes>
    </div>
  );
};

export default App;
