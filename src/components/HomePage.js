import React, { useContext } from 'react';
import { Context } from '../Context/AuthContext';
import CreateAccount from './CreateAccount';
import GuestLogin from './GuestLogin';
import Login from './Login';
import RecipeHomePage from './RecipeFinder/RecipeHomePage';
import '../styles/pages/_home-page.scss'

const Homepage = () => {
    const { user } = useContext(Context);

    if (user) {
        return <RecipeHomePage />
    } else {
        return(
            <div className="welcome-page">
                <h1 className="title">Welcome to the Pantry</h1>    
                <div className="component1">
                <h2 className='subheader'>Login if you are new to us</h2>
                    <Login />
                </div>
                <div className="component2">
                <h2 className='subheader'>Sign up to create a new Account</h2>
                    <CreateAccount />
                </div>
                <div className="component3">
                <h2 className='subheader'>Otherwise, continue as guest</h2>
                    <GuestLogin />
                </div>
            </div>
        )
    }
}

export default Homepage;