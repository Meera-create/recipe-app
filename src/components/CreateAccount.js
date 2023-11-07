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

  
  return (
    <div>
      <form>
        <label htmlFor="email">
          Email:
        </label>
      </form>
    </div>
  )

};

export default CreateAccount;