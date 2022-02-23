import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";
import {
  Bar
} from "react-chartjs-2";
import "./BarChart.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

const BarChart = () => {

  var data = {

    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
      "December"
    ],
    datasets: [{
      label: 'January',
      data: [180, 200, 400, 500, 800, 1000, 890, 400, 250, 600, 844, 100],
      backgroundColor: [
        '',
        'rgba(255, 159, 64)',
        'rgba(255, 1, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 20, 207)',
        'rgba(1, 3, 207)',
        'rgba(1, 203, 207)',
        'rgba(201, 203, 7)'

      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      borderRadius: 5
    }]
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 12,
      }
    }
  }






  return ( 
    <div >
      <div className = "bar-chart" >
    <div className = "bar-top" >
    <h2 className = "bar-title" >Users </h2>
     <select >
       <option value = "This year" > This year </option> 
       <option value = "2021" > 2021 </option>
</select>
</div>
 <Bar data = {
      data
    }
    options = {
      options
    } >

    </Bar>
</div>
 </div>
 
  )
}

export default BarChart;