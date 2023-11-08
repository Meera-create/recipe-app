import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const CreateAccount = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log("Account Created");
        setFields(initialState.fields);
        navigate("/recipe-form");
      })
      .catch((error) => {
        console.log(error);
        setFields(initialState.fields);
      });
  }
  
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email2">
          Email: <br /><br />
          <input 
            id="email2" 
            name="email2" 
            value={fields.email} 
            onChange={handleFieldChange} 
          />
        </label>
        <label htmlFor="password2">
          Password: <br /><br />
          <input
            id="password2"
            name="password2"
            type="password"
            values={fields.password}
            onChange={handleFieldChange} 
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )

};

export default CreateAccount;