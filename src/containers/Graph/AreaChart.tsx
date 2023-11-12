import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container, Content, Percent, Title } from "./styles";

const data = [
  {
    name: "1 فبراير",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graph = ({ value, percent }: any) => {
  return (
    <Container>
      <Title>
        <Content>
          <h1>{value} ريال</h1>
          <p>اشتراكات هذا الأسبوع</p>
        </Content>
        <Percent>{percent}</Percent>
      </Title>
      <div style={{ width: "100%", height: 220 }} dir="ltr">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray={0} stroke="none" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#A090FF"
              strokeWidth={3}
              fill="#F7F5FF" /* "#8884d8" */
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};
export default Graph;
