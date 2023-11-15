

import '../styles/pages/_my-account.scss'

import React, { useContext } from 'react';
import { Context } from '../Context/AuthContext';


const MyAccount = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <div>
      {`${user.displayName}'s Account`}
    </div>
  )
}

export default MyAccount