import React, { useState } from 'react'
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm'
import HomePage from './HomePage'


const GuestLogin = () => {



    const [guest, setGuest] = useState(false)

    const guestHandler = () => {
        setGuest(true)

    }



    return (
        <div>

   <button value={guest}  type="button"
                onClick={guestHandler}
                {...guest?<RecipeFinderForm/>:<HomePage/>}
            >
                            
                Login As Guest
            </button>


        </div>
    )
}

export default GuestLogin;
