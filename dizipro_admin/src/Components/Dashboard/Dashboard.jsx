import { Link } from "react-router-dom";
import DashboardIcon from "../../Assets/Img/DashboardIcon.svg";
import Logo from "../../Assets/Img/Logo.svg";
import Messenger from "../../Assets/Img/Messenger.svg";
import Payment from "../../Assets/Img/Payment.svg";
import Projects from "../../Assets/Img/Projects.svg";
import Users from "../../Assets/Img/Users.svg";
import "./Dashboard.css"
const Dashboard = () =>{
  return (
    <div className="dashboard">
      
      <img src={Logo} alt="" />
      <ul className="dashboard-list">
        <li className="dashboard-item">
          <Link to="/" className="dashboard-link">
              <img src={DashboardIcon} alt="" />
          </Link>
        </li>
        <li className="dashboard-item">
          <Link to="/usersPage" className="dashboard-link">
              <img src={Users} alt="" />
          </Link>
        </li>
        <li className="dashboard-item">
          <Link to="/paymentsPage" className="dashboard-link">
              <img src={Payment} alt="" />
          </Link>
        </li>
        <li className="dashboard-item">
          <Link to="/projectsPage" className="dashboard-link">
              <img src={Projects} alt="" />
          </Link>
        </li>
        <li className="dashboard-item">
          <Link to="/messengerPage" className="dashboard-link">
              <img src={Messenger} alt="" />
          </Link>
        </li>
        

      </ul>
    </div>
  )
}
export default Dashboard;