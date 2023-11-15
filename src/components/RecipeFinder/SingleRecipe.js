import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';


const SingleRecipe = ({ extractedRecipe }) => {
    // console.log(extractedRecipe);

    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            const docRef = await addDoc(collection(db, "recipes"), {
                recipeId: extractedRecipe.id,
                title: extractedRecipe.title,
                uid: user.uid
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
    // console.log(recipeID, 'this is a recipe ID')
        return (
            <div className="single_recipe">
                <h1>Your recipe</h1>
                <p>{extractedRecipe.title}</p>
                {parse(`${extractedRecipe.instructions}`)}
                <p>Time to cook {extractedRecipe.readyInMinutes}</p>
                <button type="button" onClick={saveRecipe}>Save</button>
            </div>
        )
    }


export default SingleRecipe;
