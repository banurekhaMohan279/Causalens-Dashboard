//import React, {useState, useEffect} from 'react'
import { Form } from 'react-bootstrap'
import useDataApi from '../Common/useDataApi'
import {SeriesContext} from '../App'
import {useContext} from 'react'

const Select = () => {
  const [data, isLoading, isError , doFetch] = useDataApi(
    'http://localhost:3002/series',
    []
  );

  const {currentSeries,setCurrentSeries} = useContext(SeriesContext)

  const handleChange = (e) =>{
    e.preventDefault();
    setCurrentSeries(e.currentTarget.value);
    console.log('setting current series');
  }

  return(
    <>
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (
      <div>Loading ...</div>
    ) : (
        <>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Select Series</Form.Label>
              <Form.Control as="select" size="sm" custom onChange = {handleChange}>
                {data.map((element) => (
                  <option key = {element.toString()} >{element}</option>
                ))}
                </Form.Control>
                </Form.Group>
              </Form>
        </>
      )
  }
  </>
)
}

export default Select
