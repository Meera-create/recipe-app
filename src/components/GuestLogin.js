import React, {useState} from 'react'
import Homepage from './HomePage';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm';



const GuestLogin = () => {


    const [guestLogin, setGuestLogin] = useState(false)
    
    const guestLogHandler = () => {
        setGuestLogin(true)
        guestLogin?<RecipeFinderForm />:<Homepage />
        }




    return (
        <div>

            <button value="button" type="button"
                onClick={guestLogHandler}>           
            
                            
                Login As Guest
            </button>


        </div>
    )
}

export default GuestLogin;
