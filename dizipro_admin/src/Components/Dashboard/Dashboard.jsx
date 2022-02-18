import DashboardIcon from "../../Assets/Img/DashboardIcon";
import Logo from "../../Assets/Img/Logo";
import Messenger from "../../Assets/Img/Messenger";
import Payment from "../../Assets/Img/Payment";
import Projects from "../../Assets/Img/Projects";
import Users from "../../Assets/Img/Users";

const Dashboard = () =>{
  return (
    <div className="dashboard">
      
      <img src={Logo} alt="" />
      <ul className="dashboard-list">
        <li className="dashboard-item">
          <a href="#dashboard" className="dashboard-link">
              <img src={DashboardIcon} alt="" />
          </a>
        </li>
        <li className="dashboard-item">
          <a href="#dashboard" className="dashboard-link">
              <img src={Users} alt="" />
          </a>
        </li>
        <li className="dashboard-item">
          <a href="#dashboard" className="dashboard-link">
              <img src={Payment} alt="" />
          </a>
        </li>
        <li className="dashboard-item">
          <a href="#dashboard" className="dashboard-link">
              <img src={Projects} alt="" />
          </a>
        </li>
        <li className="dashboard-item">
          <a href="#dashboard" className="dashboard-link">
              <img src={Messenger} alt="" />
          </a>
        </li>
        

      </ul>
    </div>
  )
}
export default Dashboard;