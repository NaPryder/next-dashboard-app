"use server"

import { randomInt } from "crypto";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { setTimeout } from "timers/promises"

export interface Revenue {
  date: string;
  grab: number;
  lineman: number;
  foodpanda: number;
}
export async function OverviewBarChart(time: number) {

  const data: Revenue[] = await setTimeout(time,
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
  return data
}


export async function OverviewBarChart2(time: number) {

  const data: Revenue[] = await setTimeout(time,
    [
      {
        date: '2024-06-01',
        grab: 4000,
        lineman: 2400,
        foodpanda: 2400,
      },
      {
        date: '2024-06-01',
        grab: 4000,
        lineman: 2400,
        foodpanda: 555,
      },
      {
        date: '2024-06-01',
        grab: 4000,
        lineman: 12400,
        foodpanda: 2400,
      },
      {
        date: '2024-06-02',
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
        date: '2024-07-17',
        grab: 4444,
        lineman: 22,
        foodpanda: 333,
      },
    ]
  )
  return data
}

