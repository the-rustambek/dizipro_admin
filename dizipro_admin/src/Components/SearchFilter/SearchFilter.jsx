import "./SearchFilter.css";
 import Search from "../../Assets/Img/Search.svg"
const SearchFilter = () =>{
  return (
      <>
      <ul className="users-list">
          <li className="users-item">
            <button className="users-btn">
              All
            </button>
          </li>
          <li className="users-item">
            <button className="users-btn">
              Not seen
            </button>
          </li>
          
          <li className="users-item">
            <button className="users-btn">
              Saved
            </button>
          </li>
          
          <li className="users-item">
            <button className="users-btn">
              Blocked
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
                placeholder="Name or ID" 
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
                Only women
              </button>
            </li>
            <li className="filter-item">
              <button className="filter-btn">
                A-Z
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
export default SearchFilter;