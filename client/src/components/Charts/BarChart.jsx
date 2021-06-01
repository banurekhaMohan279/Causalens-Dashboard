import { BarChart, XAxis, YAxis, Tooltip, Bar, LabelList } from "recharts";

export default function BarChartComponent(props) {
  const featureImportance = props.featureImportance;
  let result = [];
  if (featureImportance) {
    for (const [key, value] of Object.entries(featureImportance)) {
      if (value > 0) result.push({ index: key, value: value });
    }
  }

  return (
    <>
      <h5> Feature Importance </h5>
      <div className="area-chart-wrapper">
        <BarChart
          width={400}
          height={400}
          data={result}
          margin={{ top: 20, right: 50, bottom: 20, left: 50 }}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="index" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#387908">
            <LabelList position="right" />
          </Bar>
        </BarChart>
      </div>
    </>
  );
}
