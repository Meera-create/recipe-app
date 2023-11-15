

import '../styles/pages/_my-account.scss'

import React, { useContext } from 'react';
import { Context } from '../Context/AuthContext';
import { db } from '../config/firebase';


const MyAccount = () => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(db);
  return (
    <div>
      {`${user.displayName}'s Account`}
    </div>
  )
}

export default MyAccount