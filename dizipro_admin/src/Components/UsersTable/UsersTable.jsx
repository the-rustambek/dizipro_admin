import "./UsersTable.css"
import Avatar from "../../Assets/Img/Avatar.svg";

const UsersTable = () =>{
return (
<div class="wrapper">
    <table className="users-table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th>
            Name and ID

          </th>
          <th>
            Email
          </th>
          <th>Gender</th>
          <th>Country</th>
          <th>Activity (day)</th>
          <th>

          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
          <input type="checkbox" />
          </th>
          <td>
            <span className="users-span">
              <img src={Avatar} alt="" />
              <span>
                <p>Aziza Shukurova</p>
                <p>
                  ID 45678
                </p>
              </span>
            </span>

          </td>
          <td>
            dizipro@gmail.com
          </td>
          <td>Man</td>
          <td>England</td>
          <td>30min</td>
          <td><button>...</button></td>
        </tr>
        <tr>
          <th>
          <input type="checkbox" />
          </th>
          <td>
            <span className="users-span">
              <img src={Avatar} alt="" />
              <span>
                <p>Aziza Shukurova</p>
                <p>
                  ID 45678
                </p>
              </span>
            </span>

          </td>
          <td>
            dizipro@gmail.com
          </td>
          <td>Man</td>
          <td>England</td>
          <td>30min</td>
          <td><button>...</button></td>
        </tr>
        <tr>
          <th>
          <input type="checkbox" />
          </th>
          <td>
            <span className="users-span">
              <img src={Avatar} alt="" />
              <span>
                <p>Aziza Shukurova</p>
                <p>
                  ID 45678
                </p>
              </span>
            </span>

          </td>
          <td>
            dizipro@gmail.com
          </td>
          <td>Man</td>
          <td>England</td>
          <td>30min</td>
          <td><button>...</button></td>
        </tr>

      </tbody>
    </table>
</div>
)
}

export default UsersTable;