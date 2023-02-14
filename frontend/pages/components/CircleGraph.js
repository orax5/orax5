import React from "react";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "찬성", value: 400 },
  { name: "반대", value: 300 },
];

export default function CircleGraph() {
  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
}
