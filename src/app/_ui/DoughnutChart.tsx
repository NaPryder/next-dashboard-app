'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from "chart.js/auto"

import { ChartData } from '../_lib/chart-interfaces'
import { Legend } from 'chart.js'


// Chart.register(Legend)

const DoughnutChart = ({ data }: { data: ChartData }) => {
    const options = {
        // plugins: {
        //     legend: {
        //         display: false
        //     }
        // }
    }

    return (
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart
