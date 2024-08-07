import React, { Suspense } from 'react'
import { formatAmount } from '../_lib/utils'
import CardSummaryAmount from '../_ui/root/CardSummaryAmount'
import DoughnutChart from '../_ui/DoughnutChart'
import SummaryProfitChart from '../_ui/root/SummaryProfitChart'
import { getSaleOrder, getSummaryProfitData } from '../_lib/data'
import SaleOrderDoughnutChart from '../_ui/root/SaleOrderDoughnutChart'

const Home = async () => {
    const [summaryProfitData, saleOrderData] = await Promise.all([
        getSummaryProfitData(),
        getSaleOrder(),
        // OverviewBarChart2(1000),
        // OverviewBarChart(3000),
    ])
    // const summaryProfitData = await getSummaryProfitData()
    const data = {
        datasets: [
            {
                label: "Income",
                data: [1200, 2250, 3870],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
            },
            {
                label: "Order",
                data: [99, 170, 302],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
            },
        ],
        labels: ["Sample1", "Sample2", "Sample3"],
    };
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
                <Suspense fallback={<>Loading...</>}>
                    <SummaryProfitChart data={summaryProfitData} />
                </Suspense>
                {/* <Suspense fallback={<>Loading.......</>}>
                    <SaleOrderDoughnutChart data={saleOrderData} />
                </Suspense> */}
                <SaleOrderDoughnutChart data={data} />

            </section>

        </div>
    )
}

export default Home
