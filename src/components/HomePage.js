import React from 'react'
import CreateAccount from './CreateAccount';
import GuestLogin from './GuestLogin';
import Login from './Login';
import '../styles/pages/_home-page.scss'


const Homepage = () => {
    return(
        <div className="welcome-page">
            <h1>Welcome to the Pantry</h1>
            
            <div className="component">
            <h2>Login if you are new to us</h2>
                <Login />
            </div>
            
            <div className="component">
            <h2>Sign up to create a new Account</h2>
                <CreateAccount />
            </div>
            
            <div className="component">
            <h2>Otherwise, continue as guest</h2>
                <GuestLogin />
            </div>
            
            
        </div>
    )
}

export default Homepage;