import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Context/AuthContext';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import "../styles/components/_star-rating.scss";

const StarRating = ({ recipe, rating, setRating }) => {

  // console.log(setRating);
  const { user } = useContext(Context);

  const [hover, setHover] = useState();
  // const [rating, setRating] = useState(0);

  const recipeRef = doc(db, "recipes", `${recipe.id} - ${user.uid}`);

  // Look into setting the rating in a different area where the onClick for clicking on the saved recipe is rendered

  useEffect(() => {
    if (recipe.rating !== undefined) {
      setRating(recipe.rating);
    }
  }, [recipe, setRating]);

  const handleClick = async (starRating) => {
    setRating(starRating);
    setDoc(recipeRef, {
      recipe: {
        rating: starRating
      },
      // rating: starRating,
      uid: user.uid,
      updatedAt: serverTimestamp()
    }, { merge: true });

  }

  return (
    <div className='star-rating'>
      {
        [...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => {
                // setRating(index);
                handleClick(index);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className='star'>&#9733;</span>
            </button>
          );
        })
      }
    </div>
  )
}

export default StarRating;