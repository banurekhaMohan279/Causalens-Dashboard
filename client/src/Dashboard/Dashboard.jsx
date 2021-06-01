import {GridBtn, GridTile} from './Dashboard.style.js'
import {SeriesContext} from '../App'
import {useContext, useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BarChartComponent from '../Charts/BarChart'
import TableComponent from '../Table/Table'
import LineChartComponent from '../Charts/LineChart'
import useDataApi from '../Common/useDataApi'

function Dashboard() {
  const {currentSeries,setCurrentSeries} = useContext(SeriesContext);
  let urls = [
    `http://localhost:3002/data/${currentSeries}`,
    `http://localhost:3002/results/${currentSeries}`
  ];
  const [existing, setExisting] = useState([]);
  const [predicted, setPredicted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    let requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then( (results) => {
        setExisting(results[0]);
        setPredicted(results[1]);
        setIsLoading(false);
    })
  },[currentSeries]);
  /*let existing, isLoading, isError1, doFetch1, predicted, isLoading2, isError2, doFetch2;

  useEffect(()=>{
     [existing, isLoading, isError1, doFetch1] = useDataApi(`http://localhost:3002/data/${currentSeries}`,[]);
     [predicted, isLoading2, isError2, doFetch2] = useDataApi(`http://localhost:3002/results/${currentSeries}`,[]);
  },[currentSeries]);*/

  function LoadData(){
    console.log('Inside render ..', currentSeries);
    return (
      <>
        <Row>
          <Col> <LineChartComponent existing = {existing} predicted = {predicted.predictions} series = {currentSeries}/> </Col>
          <Col><BarChartComponent featureImportance = {predicted.featureImportance}/></Col>
        </Row>
        <Row>
          <Col><TableComponent heading = 'Model Details' header = {['Property', 'Value']} data = {predicted.modelSummary} /></Col>
          <Col><TableComponent heading = 'Scoring Metrics' header = {['Metric', 'Value']} data = {predicted['scoring_metrics']} /></Col>
          <Col><TableComponent heading = 'Confusion Matrix' header = {['', 'Positive', 'Negative']} data = {predicted.confusionMetric} /></Col>
        </Row>
      </>
    )
  }

  return (
      <>
      {isLoading ? (<div> Loading... </div>)
      : (LoadData())}
      </>
  )
}
export default Dashboard
