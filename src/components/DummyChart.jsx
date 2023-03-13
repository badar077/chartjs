import React from 'react';
import { Line } from 'react-chartjs-2';
// import 'chartjs-plugin-scrollbar';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3, 7],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        maxBarThickness: 100,
        maxHeight: 400,
        gridLines: {
          display: false,
        },
        scrollbar: {
          autoHide: true,
          mode: 'nearest',
        },
      },
    ],
  },
};

const DummyChart = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

export default DummyChart;
