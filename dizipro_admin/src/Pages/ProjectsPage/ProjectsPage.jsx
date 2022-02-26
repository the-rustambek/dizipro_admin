import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import ProjectsFilter from "../../Components/ProjectsFilter/ProjectsFilter";
import ProjectsTable from "../../Components/ProjectsTable/ProjectsTable";

import "./ProjectsPage.css";

const ProjectsPage = () =>{
  return (
    <div className="projects-page">
      <Dashboard />
      <div className="project-main">
      <Header />
      <div className="projects-box">
        <div className="projects-content">
       <ProjectsFilter />
       <ProjectsTable />
       </div>
      </div>
      
      </div>
    </div>
  )
}
export default ProjectsPage;