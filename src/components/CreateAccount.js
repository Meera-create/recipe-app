import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Alert from "./RecipeFinder/Alert";
import '../styles/components/_create-account.scss'

const CreateAccount = () => {
  const initialState = {
    fields: {
      username: "",
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

  const handleSignUp = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then(({ user }) => {
        console.log(user);
        updateProfile(user, { displayName: fields.username });
        console.log("Account Created");
        setAlert({
          message: "Your account has been created",
          isSuccess: true,
        });
        setFields(initialState.fields);
        navigate("/recipe-form");
      })
      .catch((error) => {
        console.log(error);
        setAlert({ message: error.message, isSuccess: false })
        setFields(initialState.fields);
      });
  }
  
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleSignUp} className="create-account">

        <div className="box-input">
        <label htmlFor="username-signup">
          Username: 
          </label>
          <input 
            id="username-signup" 
            name="username" 
            value={fields.username}
            required 
            onChange={handleFieldChange} 
          />
          </div>
       
        <div className="box-input">
        <label htmlFor="email-signup">
          Email: </label>
          <input 
            id="email-signup" 
            name="email" 
            value={fields.email} 
            onChange={handleFieldChange} 
          />
          </div>
        
        <div className="box-input">
        <label htmlFor="password-signup">
          Password:</label>
          <input
            id="password-signup"
            name="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange} 
          />
          </div>
        

        <div className="box-input">
          <button type="submit">Sign Up</button>
        </div>
        
      </form>
    </div>
  )

};

export default CreateAccount;