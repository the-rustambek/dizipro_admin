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
  const pieData = {
    // labels: [
    //   'Women',
    //   'Men'
    // ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        '#3733E4',
        '#E929E1',
        
      ],
      hoverOffset: 4
    }]
  };
  var pieOptions = {
    maintainAspectRatio:false,
    scales:{
     
    },
    // legend:{
    //   labels:{
    //     fontSize:12,
      
    //   }
    // }
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
<div className="pie-box">   
   <Pie className="pie" 
   data={pieData} options={pieOptions} height={200}>

      </Pie>
      <ul className="pie-list">
        <li className=" pie-men">
          <p>Men (27%)</p>
        </li>
        <li className=" pie-women">
          <p>Women (73%)</p>
        </li>
        
      </ul>

      </div>
    </div>
    </div>

  )
}

export default PieChart;