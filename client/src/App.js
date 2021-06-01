import React from "react";
import usePersistedState from "./utils/usePersistedState";
import { GlobalStyle } from "./utils/GlobalStyle";
import Header from "./components/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = usePersistedState("light", true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle toggle={theme} />
      <Header />
      <Dashboard />
    </ThemeContext.Provider>
  );
};

export default App;
