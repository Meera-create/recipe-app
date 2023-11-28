import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import '../styles/components/_logout.scss'


const Logout = () => {
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleCloseHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".boxes2");

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  const handleLogout = (event) => {
    event.preventDefault();
    // handleCloseHamburger();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setLoggedOut(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="logout-button" type="button" onClick={handleLogout}>
        Logout
      </button>
      {loggedOut && <p>Logged out</p>}
    </div>
  );
};

export default Logout;
