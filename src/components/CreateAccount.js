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
      });
      navigate("/");
  }
  
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
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