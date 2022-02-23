import Notifications from "../../Assets/Img/Notifications.svg";
import Avatar from "../../Assets/Img/Avatar.svg";
import "./Header.css";
 
const Header = () =>{
  return (
    <div className="header">
      <div className="header-title">Dashboard</div>
      <div className="header-right">
        <ul className="header-list">
          <li className="header-item">
            <button className="header-btn">
              <img src={Notifications} alt="" className="header-notification" />
              <span>Notifications</span>
            </button>
          </li>
          <li className="header-item">
            <button className="header-user">
                <img src={Avatar} alt="" className="header-img" />
           <span>Jaloliddin Esonboyev</span>
            </button>
          </li>
        </ul>
      </div>
   
    </div>
  )
}
export default Header;