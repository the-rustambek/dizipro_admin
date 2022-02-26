import "./PaymentsTable.css"
import Avatar from "../../Assets/Img/Avatar.svg"
import { useEffect, useState } from "react";
import Visa from "../../Assets/Img/Visa1.svg"

const PaymentsTable = () =>{
const [users, setUsers] = useState([]);

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()).then((data) => 
        setUsers(data))
},[])



return (
<div className="wrapper">
  <h2>Payments</h2>
  <table className="payments-table">
    <thead>
      <tr>
   
        <th>
          Sender

        </th>
        <th>
          Card Number
        </th>
        <th>Credit card</th>
        <th>Project</th>
        <th>Date</th>
        <th>
Price
        </th>
      </tr>
    </thead>

    {users.length > 0 && (
    <tbody>
      {users.map((user, i) =>(
      <tr className="tbody-tr" key={i}>
   
        <td>
          <span className="users-span">
            <img src={Avatar} alt="" className="payments-avatar" />
              <p >{user.name} </p>
          </span>
        </td>
        <td>
          ***** **** {user.address.zipcode}
        </td>
        <td><img src={Visa} alt="" /></td>
        <td>{user.website}</td>
        <td>0{user.id}.0{user.id*3}.2021</td>
        <td>
          ${user.id*130}
        </td>
      </tr>
      ))}
    </tbody>
    )}


  
  </table>


</div>
)
}

export default PaymentsTable;