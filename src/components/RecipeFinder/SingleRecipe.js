import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss'



const SingleRecipe = ({ extractedRecipe }) => {
    // console.log(extractedRecipe);

    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            await setDoc(doc(db, "recipes", `${extractedRecipe.id}`), {
                uid: user.uid,
                recipe: extractedRecipe,
                createdAt: serverTimestamp()
            });
            toast.success("Recipe saved!")
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("There was a problem saving the recipe - please try again later");
        }
    };
        return (
            <div className="single_recipe">
                <Toaster />
                <h1>Your recipe</h1>
                <p>{extractedRecipe.title}</p>
                {parse(`${extractedRecipe.instructions}`)}
                <p>Time to cook {extractedRecipe.readyInMinutes}</p>
                <button type="button" onClick={saveRecipe}>Save</button>
            </div>
        )
    }


export default SingleRecipe;
