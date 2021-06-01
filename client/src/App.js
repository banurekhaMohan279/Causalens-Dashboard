import React, {useState} from 'react'
import Header from './components/Header.jsx'
import Dashboard from './views/Dashboard.jsx'
import {GlobalStyle} from './utils/GlobalStyle'
import 'bootstrap/dist/css/bootstrap.min.css';
export const ThemeContext = React.createContext()

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
  <ThemeContext.Provider value = {{theme,setTheme}}>
      <GlobalStyle/>
        <Header />
        <Dashboard />
  </ThemeContext.Provider>
  )
}

export default App
