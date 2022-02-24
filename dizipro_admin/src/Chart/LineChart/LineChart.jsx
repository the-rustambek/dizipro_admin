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
import {
  Line
} from "react-chartjs-2";
import "./LineChart.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {

  const  labels = ['Du', 'Se', 
  'Ch', 'Pa', 'Ju', 'Sh', 'Ya'
 ] 
  var lineData = {
    labels,
    datasets: [
      {
        label: 'Average usage time  ',
        data: [69, 72,  71, 75, 72,76, 70],
      
        borderColor: '#8338EC',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
   
    ],
  };
  var options = {
    responsive: true,
    plugins: {
      legend: {
        display:0
      },
      title: {
        display: true,
        
      },
    },
  }






  return ( 
    
      <div className = "line-chart" >
        <div className = "line-top" >
        <h3 className = "line-title" >Average usage time (min) </h3>
        <select >
          <option value = "This week" > This week </option> 
          <option value = "Saturday" > Saturday </option>
    </select>
          </div>
          <span>
            <h3>13</h3>
            <p>-37%</p>
          </span>
 <Line className="line" height={63} data = {lineData}
    options = {options} >
 </Line>
</div>
 
 
  )
}

export default LineChart;