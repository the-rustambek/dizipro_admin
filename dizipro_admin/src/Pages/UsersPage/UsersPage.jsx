import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import EnhancedTable from "../../Components/UsersTable/UsersTable";

import "./UsersPage.css";

const UsersPage = () =>{
  return (
    <div className="users-page">
      <Dashboard />
      <div className="mains">
      <Header />
      <div className="users-box">
        <div className="users-content">
       <SearchFilter />
       <EnhancedTable />
       </div>
      </div>
      
      </div>
    </div>
  )
}
export default UsersPage;