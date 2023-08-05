import {PieChart, Pie, Tooltip, } from "recharts";

const Statistics = () => {
    const data = [
        { name: "Assignment1", value: 55},
        { name: "Assignment2", value: 50},
        { name: "Assignment3", value: 45},
        { name: "Assignment4", value: 55},
        { name: "Assignment5", value: 45},
        { name: "Assignment6", value: 53},
    ]
    return (
        <div>
            <h1 className="text-3xl text-center py-8"> Assignment  1-6 Marks </h1>
            <PieChart className="ml-96 pl-72" width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
        </div>
    );
};

export default Statistics;