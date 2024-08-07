import React from 'react'
import DoughnutChart from '../DoughnutChart'
import { ChartData } from '@/app/_lib/chart-interfaces'

const SaleOrderDoughnutChart = async ({ data }: { data: ChartData }) => {
  return (
    <div className='card-container'>
      <h2 className='mx-auto '>Overview</h2>
      <div className='size-full max-h-[250px]'>
        <DoughnutChart data={data} />
      </div>

    </div>
  )
}

export default SaleOrderDoughnutChart