import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebase";
import Alert from "./RecipeFinder/Alert";

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    signInWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        // const { user } = userCredential;
        setAlert({
          message: "You have logged in successfully!",
          isSuccess: true,
        });
        console.log("User Logged In");
        navigate("/recipe-form");
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: error.message,
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="login">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="login-form" onSubmit={handleLogin}>
      <label htmlFor="email">
          Email: <br /><br />
          <input 
            id="email" 
            name="email" 
            value={fields.email} 
            onChange={handleFieldChange} 
          />
        </label>
        <label htmlFor="password">
          Password: <br /><br />
          <input
            id="password"
            name="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange} 
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;