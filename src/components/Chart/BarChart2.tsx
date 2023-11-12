import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const newData = [
  {
    usage: 8,
  },
  {
    usage: 229,
    name: "2/1/22",
  },
];

const BarChart2 = (props: any) => {
  return (
    <div>
      <BarChart
        width={600}
        height={310}
        data={props.data}
        margin={{
          top: 0,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="date" />
        <YAxis label="ريال" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#1877F2" />
      </BarChart>
    </div>
  );
};
export default BarChart2;
