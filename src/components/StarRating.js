import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Context/AuthContext';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import "../styles/components/_star-rating.scss";

const StarRating = ({ recipe, rating, setRating }) => {

  const { user } = useContext(Context);
  const [hover, setHover] = useState();
  const recipeRef = doc(db, "recipes", `${recipe.id} - ${user.uid}`);

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