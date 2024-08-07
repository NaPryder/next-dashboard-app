'use client'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import { BarChartData } from '../_lib/chart-interfaces'

Chart.register(CategoryScale)


const BarChart = ({ data }: { data: BarChartData }) => {
  return (
    <Bar data={data} />
  )
}

export default BarChart