import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme.background, color: theme.color }}>Themed Content</div>;
};

const App = () => {
  const theme = { background: 'black', color: 'white' };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};
export default ThemedComponent;