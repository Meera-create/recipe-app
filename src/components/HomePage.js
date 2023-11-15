import React from 'react'
import CreateAccount from './CreateAccount';
import GuestLogin from './GuestLogin';
import Login from './Login';
import '../styles/pages/_home-page.scss'


const Homepage = () => {
    return(
        <div className="welcome-page">
            <h1>Welcome to the Pantry!!</h1>
            <h3>Login in or Sign is as Guest to Find your recipes</h3>
            <CreateAccount />
            <GuestLogin />
            <Login />
        </div>
    )
}

export default Homepage;