import React, { Suspense } from 'react'
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import BarChart from '../BarChart'
import { BarChartData } from '@/app/_lib/chart-interfaces'
import { getSummaryProfitData } from '@/app/_lib/data'

Chart.register(CategoryScale)

type SummaryProfitChartProps = {
  data: BarChartData
}

// const SummaryProfitChart = async () => {
const SummaryProfitChart = ({ data }: SummaryProfitChartProps) => {
  // const [data] = await Promise.all([
  //   getSummaryProfitData(),
  // ])

  return (

    <div className='card-container'>
      <h2 className='mx-auto '>Summary Profit</h2>
      <BarChart data={data} />

    </div>
  )
}

export default SummaryProfitChart