import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import "./PaymentsPage.css"
import PaymentsTable from "../../Components/PaymentsTable/PaymentsTable";


const PaymentsPage = () =>{
  return (
    <div className="payments-page">
      <Dashboard />
      <div className="payments-main">
      <Header />
      <div className="payments-box">
        <div className="payments-content">
        <PaymentsTable />
       </div>
      </div>
      
      </div>
    </div>
  )
}
export default PaymentsPage;