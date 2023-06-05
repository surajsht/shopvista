import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="nav-content">
          <div className="logo">
            <Link to="/"> shopVista </Link>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/product"> Product </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
