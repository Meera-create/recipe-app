import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";
import {FaPoop} from "react-icons/fa"

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <div className="navbar">
      <FaPoop />
      {user && (
        <ul>
          <li>
            <NavLink link="/">My Account</NavLink>
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