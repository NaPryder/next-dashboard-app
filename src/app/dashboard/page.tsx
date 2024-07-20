import { Suspense } from "react"
import CardWrapper from "../_ui/dashboard/card"
import RevenueChart from "../_ui/dashboard/revenue-chart"
import { lusitana } from "../_ui/font"

export default function DashboardPage() {

  return <main>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Dashboard
    </h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <CardWrapper />

    </div>
    <div className="mt-6 grid grid-cols-2 gap-6 grid-rows-2">
      <RevenueChart />
      <RevenueChart />
      <RevenueChart />
      {/* <Suspense fallback={<RevenueChartSkeleton />}>
      </Suspense> */}
      {/* <RevenueChartSkeleton /> */}
      {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
    </div>
  </main>
}