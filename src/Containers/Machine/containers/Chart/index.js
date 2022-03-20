import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "01/10",
  "02/10",
  "03/10",
  "04/10",
  "05/10",
  "06/10",
  "07/10",
  "08/10",
  "09/10",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Power On",
      data: [50, 20, 80, 70, 24, 85, 150, 20, 45, 12, 9, 92],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Start Processing",
      data: [80, 60, 20, 40, 34, 105, 50, 35, 25, 72, 49, 32],
      borderColor: "#00288A",
      backgroundColor: "#00288A",
    },
    {
      label: "Reset",
      data: [0, 30, 20, 40, 14, 15, 20, 50, 65, 42, 49, 32],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;
