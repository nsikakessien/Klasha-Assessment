import React from "react";
import { Line } from "react-chartjs-2";
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

const LineChartWithChart = () => {
  const data = {
    labels: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
    datasets: [
      {
        label: "My Dataset",
        data: [2300, 3800, 3600, 2100, 2200, 1500, 2700],
        fill: true, // this enables filling the background
        borderColor: "#EF2C5A",
        backgroundColor:
          "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))",
        borderWidth: 1,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChartWithChart;
