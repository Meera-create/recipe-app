import React, { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { Context } from '../Context/AuthContext';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import SavedRecipe from './RecipeFinder/SavedRecipe';
import '../styles/pages/_my-account.scss';
import fork from '../../src/styles/images/broccoli_fork.jpg';
import pineapple from '../../src/styles/images/pineapple-supply-co-Q7PclNhVRI0-unsplash (1).jpg'

const MyAccount = () => {
  const { user } = useContext(Context);
  const [faveRecipes, setFaveRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedRecipe]);

  const getUserFaves = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    querySnapshot.forEach((doc) => {
      if (doc.data().uid === user.uid) {
        setFaveRecipes((prevState) => {
          return [...prevState, doc.data().recipe];
        });
      }
    });
  }, [setFaveRecipes, user.uid]);

  const getUserRecipes = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "userRecipes"));
    querySnapshot.forEach((doc) => {
      if (doc.data().uid === user.uid) {
        setUserRecipes((prevState) => {
          return [...prevState, doc.data().recipe];
        });
      }
    });
  }, [setUserRecipes, user.uid]);

  useEffect(() => {  
    getUserFaves();
    getUserRecipes();
    setIsLoading(false);
  }, [getUserFaves, getUserRecipes]);
  
  const viewSavedRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const viewAddedRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  if (isLoading === true) {
    return <div>This is loading...</div>;
  } else {
    return (
      <div className="saved-recipes">
        <img className="banner-image" src={pineapple} alt="pineapple" />
        <h1 className='userName'>{`${user.displayName}'s Account`}</h1>
        

        <h2>{faveRecipes.length > 0 && "Your Saved Recipes"}</h2>
        <ul className="recipe-list">
          {faveRecipes.map((recipe, index) => (
            <li className='recipeItem' key={index}>
              <div
                className='eachRecipe'
                onClick={() => viewSavedRecipe(recipe)}
              >
                {recipe.image !== undefined && (
                  <img
                    className="recipeThumbnail"
                    alt="pic of food"
                    src={recipe.image}
                  />
                )}
                <span className="recipeTitle">{recipe.title}</span>
              </div>
            </li>
          ))}
        </ul>

        <h2>{userRecipes.length > 0 && "Your Added Recipes"}</h2>
        <ul className="recipe-list">
          {userRecipes.map((recipe, index) => (
            <li className='recipeItem' key={index}>
              <div
                className='eachRecipe'
                onClick={() => viewAddedRecipe(recipe)}
              >
                {recipe.image === undefined && (
                  <img
                    className="recipeThumbnail"
                    alt="pic of food"
                    src={fork}
                  />
                )}
                <span className="recipeTitle">{recipe.title}</span>
              </div>
            </li>
          ))}
        </ul>

        {selectedRecipe?.title !== undefined && (
          <>
            <SavedRecipe recipe={selectedRecipe} ref={ref}/>
          </>
        )}
      </div>
    );
  }
};

export default MyAccount;






