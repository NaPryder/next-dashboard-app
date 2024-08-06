'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"


interface ChartData {
    datasets: Dataset[];
    labels: string[];
}

interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];

}

interface DoughnutChartProps {
    data: ChartData
}

ChartJS.register(ArcElement, Tooltip, Legend)
const DoughnutChart = () => {
    const sdata = {
        datasets: [
            {
                label: 'Sample',
                data: [1200, 2250, 3870],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
            },
            {
                label: 'Test',
                data: [187, 534, 652],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
            },

        ],
        labels: ["Sample1", "Sample2", "Sample3"]
    }
    return (
        <Doughnut data={sdata} options={{
            plugins: {
                legend: {
                    display: false
                }
            }
        }} />
    )
}

export default DoughnutChart
