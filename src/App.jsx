import { useState, useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
// import BarChart from "./components/BarChart";
import { Bar } from "react-chartjs-2";
import "./App.css";

function App() {

  useEffect(() => {
    const myElement = document.getElementById("myChart");
    console.log(myElement);
  }, []);

  useEffect(() => {
    const myElement2 = document.getElementById("myChart2");
    console.log(myElement2);
  }, []);

  // --------------------------- data 1 & config 1 ---------------------------

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: "bar",
    data,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 10
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          }
        }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };


// ------------------------------ data 2 & config 2------------------------------

  const data2 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
    }]
  };

  const config2 = {
    type: "bar",
    data: data2,
      maintainAspectRatio: false,
      layout: {
        padding: {
          bottom: 42.3
        }
      },
      scales: {
        x: {
          ticks: {
            display: false
          },
          grid: {
            drawTicks: false
          }
        },
        y: {
          beginAtZero: true,
          afterFit: (ctx) => {
            console.log(ctx);
            ctx.width = 35
          }
        }
    },
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };

  // ----------------------------------------------------------------------

  return (
    <>
    <div className="chatCard">
      <div className="chartBox">
          <div className="colSmall">
            <Bar data={data2} options={config2} id="myChart2" />
          </div>
          <div className="colLarge">
            <div className="box">
            <Bar data={data} options={config} id="myChart" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
