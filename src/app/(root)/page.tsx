import React from 'react'
import { formatAmount } from '../_lib/utils'
import CardSummaryAmount from '../_ui/CardSummaryAmount'
import DoughnutChart from '../_ui/DoughnutChart'

const Home = () => {

    return (
        <div>
            home1

            <section className='grid grid-cols-5 gap-1'>
                <CardSummaryAmount amount={'329'} keyword='Order' delta={1.4} />
                <CardSummaryAmount amount={'223K'} keyword='GMV' delta={8} />
                <CardSummaryAmount amount={"29%"} keyword='Gross Profit' delta={4.7} />
                <CardSummaryAmount amount={"568"} keyword='APV' delta={-4.9} />
                <CardSummaryAmount amount={"8.0"} keyword='ROI' delta={11.4} />
            </section>

            <section className='grid-cols-3'>
                <div className='card-container'>
                    <h2 className='mx-auto '>Overview</h2>
                    <div className='size-full max-h-[250px]'>
                        <DoughnutChart />
                    </div>

                </div>
                <div>
                    <h2>wer</h2>
                </div>
            </section>

        </div>
    )
}

export default Home
