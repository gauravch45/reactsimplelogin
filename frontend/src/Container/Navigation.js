import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="cont-nav">
      <nav className="navi">
        <ul className="list-par">
          <li className="li-child">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          { props.onFormSwitch ? null
          : <li className="li-child">
          <Link className="link" to="/login">
            Login
          </Link>
        </li>}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
