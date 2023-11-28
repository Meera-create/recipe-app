import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";
import '../styles/components/_nav-bar.scss'
import logo from '../../src/styles/images/logo.jpg'

const NavBar = () => {
  const { user } = useContext(Context);

  const handleHamburgerClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".boxes2");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const handleCloseHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".boxes2");

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

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
              <button type="button" className="nav-item add-recipe" onClick={handleCloseHamburger}>
                <NavLink to="add-recipe">Add Recipe</NavLink>
              </button>
              <button type="button" className="nav-item recipe-form-button" onClick={handleCloseHamburger}>
                <NavLink to="recipe-form">Recipe Finder</NavLink>
              </button>
              <button type="button" className="nav-item my-account" onClick={handleCloseHamburger}>
                <NavLink to="my-account">My Account</NavLink>
              </button>
              <div className="nav-item logout" onClick={handleCloseHamburger} >
                <Logout />
              </div>
            </div>
            <div className="hamburger" onClick={handleHamburgerClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
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
              <button type="button" className="nav-item login" onClick={handleCloseHamburger}>
                <NavLink to="login">Login</NavLink>
              </button>
              <button type="button"className="nav-item sign-up" onClick={handleCloseHamburger}>
                <NavLink to="sign-up">Sign Up</NavLink>
              </button>
            </div>
            <div className="hamburger" onClick={handleHamburgerClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
      </div>
    )
  }
  
};

export default NavBar;