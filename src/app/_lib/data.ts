import { setTimeout } from "timers/promises";
import { CHART_COLORS, getMonths, RGBS } from "./chart-utils";
import { ChartData, Dataset } from "./chart-interfaces";

export async function fetchCardData() {
  // const s = new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log("resolve :>> ", resolve);
  //   }, 2000);
  // });
  return {
    numberOfInvoices: 110,
    numberOfCustomers: 1120,
    totalPaidInvoices: 1103,
    totalPendingInvoices: 1510,
  };
}

export async function fetchRevenue() {
  // const s = new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log("resolve :>> ", resolve);
  //   }, 2000);
  // });

  await setTimeout(5000, "test");
  return [
    { month: "1", revenue: 1234 },
    { month: "2", revenue: 2345 },
    { month: "3", revenue: 2555 },
    { month: "4", revenue: 1200 },
    { month: "4", revenue: 2345 },
    { month: "4", revenue: 2212 },
  ];
}

// chart js data
export async function getSummaryProfitData() {
  await setTimeout(5000, "test");
  const labels = getMonths({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [200, 300, 442, 567, 782, 892, 1200],
        backgroundColor: CHART_COLORS.red,
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: [200, 300, 500, 699, 788, 899, 1150],
        backgroundColor: CHART_COLORS.blue,
        stack: "Stack 0",
      },
      {
        label: "Dataset 3",
        data: [200, 250, 400, 768, 900, 1140, 1332],
        backgroundColor: CHART_COLORS.green,
        stack: "Stack 0",
      },
    ],
  };
  return data;
}

export async function getSaleOrder() {
  await setTimeout(1300, "test 1");

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
  return data;
  // const datasets = [
  //   {
  //     label: "Income",
  //     data: [1200, 2250, 3870],
  //   },
  //   {
  //     label: "Order",
  //     data: [99, 170, 252],
  //   },
  // ];
  // const labels = ["Sample1", "Sample2", "Sample3"];

  // class DoughnutChartPropBuilder {
  //   constructor(private datasets: Dataset[], private labels: string[]) {}

  //   public get data(): ChartData {
  //     const validDatasets: Dataset[] = this.datasets.map((dataset) => {
  //       if (dataset.backgroundColor === undefined) {
  //         // set background
  //         dataset.backgroundColor = RGBS.slice(0, dataset.data.length);
  //       }
  //       return dataset;
  //     });

  //     return { datasets: validDatasets, labels: this.labels };
  //   }
  // }

  // return new DoughnutChartPropBuilder(datasets, labels)
}
