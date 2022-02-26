import "./ProjectsFilter.css";
import Search from "../../Assets/Img/Search.svg"

const ProjectsFilter = () =>{
  return (
      <>
      <ul className="projects-list">
          <li className="projects-item" >
            <button   className="projects-btn" >
              All
            </button>
          </li>
          <li className="projects-item">
            <button   className="projects-btn">
              Submitted
            </button>
          </li>
          
          <li className="projects-item">
            <button className="projects-btn">
              In Progress
            </button>
          </li>
          
          <li className="projects-item">
            <button className="projects-btn">
              Finished
            </button>
          </li>
          <li className="projects-item">
            <button className="projects-btn">
              Cancelled
            </button>
          </li>
          
        </ul>
        {/* <hr /> */}
        <div className="filter">
          <ul className="filter-list">
            <li className="filter-item">
              <form  className="filter-form">
                <button className="search-btn">
                  <img src={Search} alt="" /></button>
                <input type="search" 
                placeholder="Projects" 
                className="filter-input" required />
                <button className="filter-button">
                  Search
                </button>
              </form>
            </li>
            <li className="filter-item">
              <button className="filter-btn filter-btns">
                Filters
              </button>
            </li>
            <li className="filter-item">
              <button className="filter-btn">
                A-Z
              </button>
            </li>
            <li className="filter-item">
              <button className="filter-btn">
                Newest
              </button>
            </li>
            <li className="filter-item">
              <button className="filter-btn">
                Oldest
              </button>
            </li>
          </ul>

        </div>
      </>
     

  )
}
export default ProjectsFilter;