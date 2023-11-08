import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import Homepage from './HomePage';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm';




const GuestLogin = () => {
    const navigate = useNavigate();
  
    return (
        <div>
            <button value="button" type="button"
                onClick={()=>navigate('/recipe-form')}>                    
                Login As Guest
            </button>
        </div>
    )
}

export default GuestLogin;
