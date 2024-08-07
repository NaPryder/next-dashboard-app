"use client"
import { OverviewBarChart, Revenue } from '@/app/dashboard/(overview)/data';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Label, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Skeleton } from '../loading';

function formatYAxis(value: string) {
  if (value === "foodpanda") return "Food Panda"
  return value
}

function Chart({ data }: { data: Revenue[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatYAxis} />

        <Tooltip />
        <Legend />
        <Bar dataKey="grab" name="Grab" fill="var(--grab-color)" stackId="a" activeBar={<Rectangle fill="green" stroke="blue" />} />
        <Bar dataKey="foodpanda" name="Food Panda" fill="var(--foodpanda-color)" stackId="a" activeBar={<Rectangle fill="pink" stroke="pink" />} />
        <Bar dataKey="lineman" name="Lineman" fill="var(--lineman-color)" stackId="a" activeBar={<Rectangle fill="lime" stroke="lime" />} />
      </BarChart>
    </ResponsiveContainer >
  )
}


export default function RevenueChart({ data }: { data: Revenue[] }) {

  // const [data, setData] = useState<Revenue[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])



  return (
    <div className=' max-h-[500px] w-[100%] bg-white p-4 rounded-xl'>
      <p>Revenue Chart</p>
      {
        isLoading ? (
          <Skeleton content="Loading ..." />
        ) : (
          data.length === 0 ? (
            <Skeleton content="No data" />
          ) :

            <Chart data={data} />
        )

      }
    </div>
  )


}
