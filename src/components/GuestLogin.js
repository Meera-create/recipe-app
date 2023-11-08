import React from 'react'
// import RecipeFinderForm from './RecipeFinder/RecipeFinderForm'
import {useNavigate} from 'react-router-dom'




const GuestLogin = () => {

    
    // const [guestButton, setGuestButton] = useState(false)
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
