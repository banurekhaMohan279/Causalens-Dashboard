import {
  ScatterChart, XAxis, YAxis, ZAxis, Tooltip, CartesianGrid, Legend, Scatter
} from 'recharts';

export default function ScatterChartComponent(){

  const data03 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];

  const data04 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ];
  
  return(
    <div className="scatter-chart-wrapper">
      <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis range={[64]} />
        <CartesianGrid />
        <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
        <Legend/>
        <Scatter line lineJointType="monotoneX" shape="wye" legendType="wye" data={data03} fill="#ff7300" />
        <Scatter line shape="square" legendType="square" data={data04} fill="#347300" />
      </ScatterChart>
    </div>
  )
}
