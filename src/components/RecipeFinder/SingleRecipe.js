import React, {useEffect} from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';


const SingleRecipe = ({ setSingleRecipe, singleRecipe, recipeID, url, setURL , setExtractedRecipe,extractedRecipe}) => {
    
    console.log(recipeID, 'this is a recipe ID')

    

    useEffect(() => {
        const recipeReturned = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.spoonacular.com/recipes/${recipeID}/information`,
                    {
                        headers: {
                            "x-api-key": apiConfig.apiKey,
                        },
                    });
            
                console.log(data, "fefehfkahe")
                setSingleRecipe(data);
                // console.log(singleRecipe, "the recipe")
                console.log(data.sourceUrl, 'URL WEBSITE')
                setURL(data.sourceUrl);
                console.log(url, 'this is the URL!!!')

        
        
            } catch (error) {
                console.log(error);
            }
        
        };
        recipeReturned()
    }, [setURL, recipeID, setSingleRecipe, url])

        
        
        //extract recipe from website
        useEffect(() => {
            const recipeExtracted = async () => {
                try {
                    const { data } = await axios.get(
                        `https://api.spoonacular.com/recipes/extract?url=${url}`,
                        {
                            headers: {
                                "x-api-key": apiConfig.apiKey,
                            },
                        });
            
                    console.log(data, "extracted recipe");
                    // console.log(data.instructions)
                    setExtractedRecipe(data);
                    // console.log(extractedRecipe, "the recipe!!!")
                    

            

        
        
                } catch (error) {
                    console.log(error);
                }
        
            };
    
            recipeExtracted()
        }, [setExtractedRecipe, url, extractedRecipe])

   
  

        return (
            <div className="single_recipe">
                <h1>Your recipe</h1>
                
             
                <p>{extractedRecipe.title}</p>
                <p>{extractedRecipe.instructions}</p>
                <p>Time to cook {extractedRecipe.readyInMinutes}</p>
                    

            </div>
        )
    }


export default SingleRecipe;
