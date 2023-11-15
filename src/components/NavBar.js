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
        <ul>
          <li>
            <NavLink to="my-account">My Account</NavLink>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      )}
    </div>
  )
};

export default NavBar;