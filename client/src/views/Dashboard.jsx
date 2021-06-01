//import {GridBtn, GridTile} from '../assets/css/Dashboard.style.js'
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "../components/Select.jsx";
import BarChartComponent from "../components/Charts/BarChart";
import TableComponent from "../components/Table";
import LineChartComponent from "../components/Charts/LineChart";

function Dashboard() {
  const [currentSeries, setCurrentSeries] = useState("example.X");
  const [existing, setExisting] = useState([]);
  const [predicted, setPredicted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let urls = [
    `http://localhost:3002/data/${currentSeries}`,
    `http://localhost:3002/results/${currentSeries}`
  ];

  useEffect(() => {
    setIsLoading(true);
    let requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(results => {
        setExisting(results[0]);
        setPredicted(results[1]);
        setIsLoading(false);
      });
  }, [currentSeries]);

  /*
  useEffect(()=>{
     [existing, isLoading, isError1, doFetch1] = useDataApi(`http://localhost:3002/data/${currentSeries}`,[]);
     [predicted, isLoading2, isError2, doFetch2] = useDataApi(`http://localhost:3002/results/${currentSeries}`,[]);
  },[currentSeries]);*/

  function LoadData() {
    return (
      <>
        <Row>
          <Col>
            {" "}
            <LineChartComponent
              existing={existing}
              predicted={predicted.predictions}
              series={currentSeries}
            />{" "}
          </Col>
          <Col>
            <BarChartComponent
              featureImportance={predicted.featureImportance}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TableComponent
              heading="Model Details"
              header={["Property", "Value"]}
              data={predicted.modelSummary}
            />
          </Col>
          <Col>
            <TableComponent
              heading="Scoring Metrics"
              header={["Metric", "Value"]}
              data={predicted["scoring_metrics"]}
            />
          </Col>
          <Col>
            <TableComponent
              heading="Confusion Matrix"
              header={["", "Positive", "Negative"]}
              data={predicted.confusionMetric}
            />
          </Col>
        </Row>
      </>
    );
  }

  return (
    <Container fluid>
      <Select series={currentSeries} setSeries={setCurrentSeries} />
      {isLoading ? <div> Loading... </div> : LoadData()}
    </Container>
  );
}
export default Dashboard;
