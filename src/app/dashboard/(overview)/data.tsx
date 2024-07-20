"use server"

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { setTimeout } from "timers/promises"

export interface Revenue {
  date: string;
  grab: number;
  lineman: number;
  foodpanda: number;
}
export async function OverviewBarChart() {

  const data: Revenue[] = await setTimeout(500,
    [
      {
        date: '2024-07-01',
        grab: 4000,
        lineman: 2400,
        foodpanda: 2400,
      },
      {
        date: '2024-07-02',
        grab: 3000,
        lineman: 1398,
        foodpanda: 2210,
      },
      {
        date: '2024-07-03',
        grab: 2000,
        lineman: 9800,
        foodpanda: 2290,
      },
      {
        date: '2024-07-04',
        grab: 2780,
        lineman: 3908,
        foodpanda: 2000,
      },
      {
        date: '2024-07-05',
        grab: 1890,
        lineman: 4800,
        foodpanda: 2181,
      },
      {
        date: '2024-07-06',
        grab: 2390,
        lineman: 3800,
        foodpanda: 2500,
      },
      {
        date: '2024-07-07',
        grab: 3490,
        lineman: 4300,
        foodpanda: 2100,
      },
    ]
  )
  // return []
  return data
  // return (

  //   <BarChart
  //     width={500}
  //     height={300}
  //     data={data}
  //     margin={{
  //       top: 15,
  //       right: 30,
  //       left: 20,
  //       bottom: 15,
  //     }}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="date" />
  //     <YAxis />
  //     <Tooltip />
  //     <Legend />
  //     <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
  //     <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
  //   </BarChart>
  // )


}

