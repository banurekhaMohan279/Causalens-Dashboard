import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  Line
} from "recharts";
import d3 from "d3";

export default function LineChartComponent(props) {
  const { existing, predicted } = props;

  let results = existing.map(itm => ({
    ...predicted.find(item => item.index === itm.index && item.prediction),
    ...itm
  }));

  return (
    <div className="line-chart-wrapper" style={{ padding: 40 }}>
      <LineChart
        width={400}
        height={400}
        data={results}
        margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
      >
        <XAxis dataKey="index" />
        <CartesianGrid stroke="#f5f5f5" />
        <Brush />
        <Tooltip filterNull={false} />
        <Line
          type="monotone"
          key={"0"}
          dataKey="prediction"
          stroke="#132908"
          yAxisId={1}
          activeDot={{ fill: "#132908", stroke: "none", r: 6 }}
        />
        <Line
          type="monotone"
          key={"1"}
          dataKey={props.series}
          stroke="#387908"
          yAxisId={1}
          activeDot={{ fill: "#387908", stroke: "none", r: 6 }}
        />
      </LineChart>
    </div>
  );
}
