import { setTimeout } from "timers/promises";

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
