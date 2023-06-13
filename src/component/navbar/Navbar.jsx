import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Navbar = () => {
  let { cartItem } = useContext(GlobalContext);

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
              <NavLink to="/shop"> Shop </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <ShoppingCartIcon />
                <span> {cartItem.length} </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
