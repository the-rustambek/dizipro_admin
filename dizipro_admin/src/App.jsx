import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import PaymentsPage from './Pages/Payments/PaymentsPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

function App() {
  return (
      
      <Switch>
            <Route path="/usersPage" component={UsersPage} />
            <Route path="/paymentsPage" component={PaymentsPage} /> 
            <Route path="/projectsPage"
             component={ProjectsPage} />
            <Route path="/" component={DashboardPage} />
        
      </Switch>
    
  );
}

export default App;
