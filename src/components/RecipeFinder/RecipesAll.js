import React from 'react'

import Alert from './Alert.js'
// import SingleRecipe from './SingleRecipe.js';
// import apiConfig from '../../config/apiConfig.js';
// import { DataTypes } from 'sequelize';

const RecipeAll = () => {

    // const [recipes, setRecipes] = useState([]);
    // const [alert, setAlert] = useState("message")
//     const [ingredients, setIngredients] = useState([]);
    
//       const handleIngredients = (e) => {
//     setIngredients(e.target.value);
//   }



    // useEffect(() => {
    //     axios.get(`https://api.edamam.com/search?app_id=${apiConfig.app_id}&app_key=${apiConfig.app_key}&q=${ingredients}`)
    //         .then(({ data }) => {
    //             setRecipes(data)
    //         })
    //         .catch((error) => {
    //             setAlert({ message: "Please try different ingredients" })
    //         })

    // }, []);



    return (
        <div className="recipesAll">
        
            <h1>Here is a list of recipes that match your search!</h1>

            {alert && <Alert message={alert.message} />}


        {/* <ul className="recipes">
        {map((recipe, index) => (
            <div className="eachRecipe" key={index} >
                <SingleRecipe {...recipe} />
          </div>
        ))}
            </ul> */}
            
        </div>
    )
}


export default RecipeAll;