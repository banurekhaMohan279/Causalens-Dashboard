/*eslint-disable */
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header/Header.jsx'
import Select from './Select/Select.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import {GlobalStyle} from './Common/GlobalStyle'
export const SeriesContext = React.createContext()
//import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [currentSeries, setCurrentSeries] = useState('example.X');
  return (
  <SeriesContext.Provider value = {{currentSeries,setCurrentSeries}}>
      <GlobalStyle/>
      <Container fluid>
        <Header />
        <Select />
        <Dashboard />
      </Container>
  </SeriesContext.Provider>
  )
}

export default App
