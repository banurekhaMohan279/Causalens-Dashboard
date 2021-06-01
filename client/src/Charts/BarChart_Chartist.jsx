import ChartistGraph from 'react-chartist';


export default function BarChart_Chartist({ id, data, width = 550, height = 300 }) {
  return (
    <ChartistGraph
      data={{
        labels: [5,10,15,20],
        series: [
          [4,5,6,7,8],
          [7,8,9,10]
        ],
      }}
      type="Line"
      options={{
        low: 0,
        high: 20,
        showArea: false,
        height: "245px",
        axisX: {
          showGrid: false,
        },
        lineSmooth: true,
        showLine: true,
        showPoint: true,
        fullWidth: true,
        chartPadding: {
          right: 50,
        },
      }}
      responsiveOptions={[
        [
          "screen and (max-width: 640px)",
          {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              },
            },
          },
        ],
      ]}
    />
  );
}
