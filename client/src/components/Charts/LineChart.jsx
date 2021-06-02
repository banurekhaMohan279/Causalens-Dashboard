import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  Line
} from "recharts";

export default function LineChartComponent(props) {
  const { series, existing, predicted } = props;

  let results = existing.map(itm => ({
    ...predicted.find(item => item.index === itm.index && item.prediction),
    ...itm
  }));

  return (
    <div className="line-chart-wrapper">
      <h5> Actual vs Prediction Plot - {series}</h5>
      <LineChart
        width={400}
        height={400}
        data={results}
        margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Brush />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="prediction"
          stroke="#132908"
          activeDot={{ fill: "#132908", stroke: "none", r: 6 }}
        />
        <Line
          type="monotone"
          dataKey={series}
          stroke="#387908"
          activeDot={{ fill: "#387908", stroke: "none", r: 6 }}
        />
      </LineChart>
    </div>
  );
}
