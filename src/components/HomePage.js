import React from 'react'
import '../styles/HomePage.css'
import CreateAccount from './CreateAccount';
import GuestLogin from './GuestLogin';
import Login from './Login';

const Homepage = () => {
    return(
        <div>
            <h1>Welcome to the Pantry!!</h1>
            <h3>Login in or Sign is as Guest to Find your recipes</h3>
            <CreateAccount />
            <GuestLogin />
            <Login />
        </div>
    )
}


export default Homepage;