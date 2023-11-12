import React from "react";
import { PieChart, Pie, Sector, Cell, Label } from "recharts";

const data = [
  { name: "Group A", value: 70 },
  { name: "Group B", value: 30 },
];

const values = [
  [30, "#FFBA34"],
  [70, "#553AFE"],
];
const COLORS = ["#553AFE", "#FFBA34"];

const PieChartt = () => {
  return (
    <PieChart width={200} height={160}>
      <text
        x={107}
        y={70}
        fontSize={12}
        color="#667085"
        fontWeight={700}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        المجموع
      </text>
      <text
        x={117}
        y={95}
        fontSize={18}
        fontWeight={700}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        101.937
      </text>
      <text
        x={75}
        y={95}
        fontSize={10}
        fontWeight={700}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ريال
      </text>
      <Pie
        data={data}
        cx={100}
        cy={80}
        innerRadius={60}
        outerRadius={70}
        paddingAngle={5}
        dataKey="value"
        cornerRadius={50}
        //isAnimationActive={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        {/*  <Label
          value="المجموع"
          position="centerBottom"
          className="label-top"
          fontSize="14px"
          color="#667085"
          fontWeight={700}
        /> */}
      </Pie>
    </PieChart>
  );
};
export default PieChartt;
