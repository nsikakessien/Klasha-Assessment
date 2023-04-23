import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import type { ChartArea, ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: any;
  options: any;
}

const LineChart = () => {
  const chartRef = useRef<ChartJS<"line", number[], string>>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, "rgba(239, 44, 90, 0)");
    gradient.addColorStop(1, "#EF2C5A");

    return gradient;
  }

  const data = {
    labels: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
    datasets: [
      {
        label: "Hidden Title",
        data: [2300, 3800, 3600, 2100, 2200, 1500, 2700],
        borderColor: "#EF2C5A",
        pointStyle: false,
        fill: true,
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset: any) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    console.log(chartData);

    setChartData(chartData);
  }, []);

  return (
    <Line ref={chartRef} datasetIdKey="id" data={chartData} options={options} />
  );
};

export default LineChart;
