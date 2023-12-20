import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: "rgba(106, 200, 99, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: [
        {
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May'],
        },
      ],
      y: {
        beginAtZero: true,
        precision: 0,
        title: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          callback: (value) => (Number.isInteger(value) ? value : ""),
        },
      },
    },
  };

  return <Line data={data} options={options} style={{ height: "100%" }} />;
};

export default LineChart;
