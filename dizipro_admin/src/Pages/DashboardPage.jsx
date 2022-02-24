import BarChart from "../Chart/Bar/BarChart";
import LineChart from "../Chart/LineChart/LineChart";
import PieChart from "../Chart/Pie/Pie";
import Progress from "../Chart/Progress/Progress";
import Dashboard from "../Components/Dashboard/Dashboard";
import Header from "../Components/Header/Header";
import "./DashboardPage.css"


const DashboardPage = () =>{
  return (
    <div className="dashboard-page">
      <Dashboard />
      <div className="main">
      <Header />
      <div className="chart
      "><BarChart />
      <PieChart />

      </div>
      <div className="main-progress">
        <Progress />
        <LineChart />
      </div>
      
      </div>
    </div>
  )
}
export default DashboardPage;