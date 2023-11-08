import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { auth } from "../config/firebase";

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log("User Logged In");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="login">
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
            values={fields.password}
            onChange={handleFieldChange} 
          />
        </label>
        <button type="submit">Login</button>
        <p>
          Need an account? Sign up <Link to="../sign-up">here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;