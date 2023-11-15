import {useNavigate} from 'react-router-dom'
import React from 'react'
import '../styles/components/_guest-login.scss'




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
