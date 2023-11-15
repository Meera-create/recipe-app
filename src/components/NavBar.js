import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";
import { FaPoop } from "react-icons/fa"
import '../styles/components/_nav-bar.scss'

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <div className="navbar">
      <Link reloadDocument to="/recipe-form"><FaPoop /></Link>
      {user && (
        <ul className="navbar_buttons">
          <li className="account_button">
            <button type="button">
              <NavLink to="my-account">My Account</NavLink>
            </button>
          </li>
          <li className="logout_button">
            <Logout />
          </li>
        </ul>
      )}
    </div>
  )
};

export default NavBar;