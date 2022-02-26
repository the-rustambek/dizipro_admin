import "./ProjectsTable.css"
import Avatar from "../../Assets/Img/Avatar.svg"
import menu from "../../Assets/Img/menu.png";
import { useEffect, useState } from "react";
import LeftNext from "../../Assets/Img/LeftNext.svg"
import RightNext from "../../Assets/Img/RightNext.svg"

const ProjectsTable = () =>{
const [users, setUsers] = useState([]);

useEffect(() =>{
fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setUsers(data))
},[])



return (
<div className="wrappers">
  <table className="projects-table">
    <thead>
      <tr>
        <th className="th-checks" scope="col">
          <input type="checkbox" />
        </th>
        <th>
        Name of project
        </th>
        <th>
        Status
        </th>
        <th>Start date</th>
        <th>End date</th>
        <th>Price</th>
        <th>

        </th>
      </tr>
    </thead>

    {users.length > 0 && (
    <tbody>
      {users.map((user, i) =>(
      <tr className="tbody-tr" key={i}>   
        <td className="tbody-check">
          <input type="checkbox" />
        </td>
        <td className="projects-tds">
              <b>{user.address.street} Lorem, ipsum. </b>
              <p>ID {user.id*25060}</p> 
        </td>
        <td className="td-status">
          <p>Finished</p>
        </td>
        <td className="project-td">0{user.id}.0{user.id}.2022</td>
        <td className="project-td">{user.id*3}.{user.id*2}.2022</td>
        <td className="project-td"> <b>${user.id*13000}</b></td>
        <td className="project-td">
          <button className="projects-btn">
            <img src={menu} alt="" />
          </button>
        </td>
      </tr>
      ))}
    </tbody>
    )}


  
  </table>
  <ul className="pagination-list">
      <li className="">
      <button >
        <img src={LeftNext} alt="" className="before-img" />
      </button>
      </li>
      <li className="">
      <button >
        from <b>18</b>
      </button>
      </li>
      <li className="">
      <button className="now-btn">
        1
      </button>
      </li>
      <li className="">
      <button  >
        <img src={RightNext} alt="" className="after-img" />
      </button>
      </li>
    </ul>

</div>
)
}

export default ProjectsTable;