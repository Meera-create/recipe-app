import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Logout = () => {
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = (event) => {
    event.preventDefault();
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
