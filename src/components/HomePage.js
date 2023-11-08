import React, { useState } from 'react'
import '../styles/Homepage.css'
import CreateAccount from './CreateAccount';
import GuestLogin from './GuestLogin';
import Login from './Login';

const Homepage = () => {


    const [guestLogin, setGuestLogin] = useState(false)
    
    const guestLoginHandler = () => {
        setGuestLogin(true)
    }

    return(
        <div>
            <h1>Welcome to the Pantry!!</h1>
            <h3>Login in or Sign is as Guest to Find your recipes</h3>
           
            < CreateAccount />
            <GuestLogin onChange={guestLoginHandler} {...guestLogin && <Homepage />} />
            <Login />
         


        </div>
    )
}


export default Homepage;