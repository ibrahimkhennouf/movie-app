import { Link } from "react-router-dom";
import "./SideBar.css";

export let SideBar = () => {
  return (
    <div className="sideBar">
      <aside>
        <div className="burg">
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <ul className="aside--List">
          <li className="aseide--list--items">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="aseide--list--items">
            {" "}
            <Link to="/onScreen">Now on screens</Link>{" "}
          </li>

          <li className="aseide--list--items">
            <Link to="/movie/add">Add movie</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};
