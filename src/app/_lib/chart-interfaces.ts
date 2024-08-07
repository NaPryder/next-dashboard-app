export interface Dataset {
  label: string;
  data: number[];
  backgroundColor?: string[] | string;
}

export interface StackedBarChartDataset extends Dataset {
  stack?: string;
  backgroundColor?: string;
}

export interface ChartData {
  datasets: Dataset[];
  labels: string[];
}

export interface BarChartData extends ChartData {
  datasets: StackedBarChartDataset[];
}
