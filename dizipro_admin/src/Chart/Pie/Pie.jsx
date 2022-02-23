import {Chart as ChartJS, Tooltip,Title, ArcElement, Legend} from "chart.js";
import {   Pie  } from "react-chartjs-2";
import "./Pie.css"
ChartJS.register(
  Tooltip,
  ArcElement,
  Legend,
  Title
)

const PieChart = () =>{
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  var options = {
    maintainAspectRatio:false,
    scales:{
      y:{
        beginAtZero: true
      }
    },
    legend:{
      labels:{
        fontSize:12,
        
      }
    }
  }



   return (
    <div>

      <div className="pie-chart">
<div className="pie-top">
  <h2 className="pie-title">
    All
  </h2>
  <select>
    <option value="This year">This year</option>
    <option value="2021">2021</option>
 
  </select>
</div>
      {/* <Bar data={data} options={options} >

      </Bar> */}

      <Pie data={data} options={options}>

      </Pie>

      </div>
    </div>
  )
}

export default PieChart;