import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";
import '../styles/components/_nav-bar.scss'
import image from '../../src/styles/images/the pantry (1).jpg'

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <div className="navbar">
      {user && (
        <div className="buttons">
          <div className="boxes">
            <Link reloadDocument to="/recipe-form">
              <img alt="logo" src={image} />
            </Link>
          </div>
          <div className="boxes2">
            <button type="button" className="add-recipe">
              <NavLink to="add-recipe">Add Recipe</NavLink>
            </button>
            <button type="button"className="my-account">
              <NavLink to="my-account">My Account</NavLink>
            </button>
            <Logout />
          </div>
        </div>
      )}
    </div>


    // <div className="navbar">
    //   <Link reloadDocument to="/recipe-form">
    //     <img alt="logo" src={image} />
    //     {/* <FaPoop /> */}
    //   </Link>
    //   {user && (
    //     <ul className="navbar_buttons">
    //       <li className="account_button">
    //         <button type="button"className="my-account">
    //           <NavLink to="my-account">My Account</NavLink>
    //         </button>
    //       </li>
    //       <li className="logout_button">
    //         <Logout />
    //       </li>
    //     </ul>
    //   )}
    // </div>
  )
};

export default NavBar;