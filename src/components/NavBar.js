import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";
import '../styles/components/_nav-bar.scss'
import logo from '../../src/styles/images/logo.jpg'

const NavBar = () => {
  const { user } = useContext(Context);

  if (user) {
    return (
      <div className="navbar">
          <div className="buttons">
            <div className="boxes">
              <Link reloadDocument to="/recipe-form">
                <img className="logo" alt="logo" src={logo} />
              </Link>
          </div>
          
            <div className="boxes2">
              <button type="button" className="add-recipe">
                <NavLink to="add-recipe">Add Recipe</NavLink>
            </button>

             
              <button type="button" className="recipe-form-button">
                <NavLink to="recipe-form">Recipe Finder</NavLink>
              </button>
             
           
              <button type="button"className="my-account">
                <NavLink to="my-account">My Account</NavLink>
              </button>
              <Logout />
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="navbar">
          <div className="buttons">
            <div className="boxes">
              <Link reloadDocument to="/recipe-form">
                <img className="logo" alt="logo" src={logo} />
              </Link>
          </div>
         

          <div className="boxes2">
            
              <button type="button" className="login">
                <NavLink to="login">Login</NavLink>
              </button>
              <button type="button"className="sign-up">
                <NavLink to="sign-up">Sign Up</NavLink>
              </button>
            </div>
          </div>
      </div>
    )
  }
  
};

export default NavBar;