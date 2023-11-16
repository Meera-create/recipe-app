import React, {useState} from 'react';


const SearchBar = () => {

   
    
    const [cuisineType, setCuisineType] = useState("");
    
      const handleCuisineChange = (e) => {
    setCuisineType(e.target.value);
     };

    
    return (

        <div>
            <h2>filter by cuisine</h2>>

        <div className="cuisine-filter">
          <label>Select Cuisine Type</label>
          <select value={cuisineType} onChange={handleCuisineChange}>
            <option value="">All Cuisines</option>
            <option value="iitalian">African</option>
            <option value="asian">Asian</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="carribean">Carribean</option>
            <option value="chinese">Chinese</option>
            <option value="eastern european">Eastern European</option>
            <option value="european">European</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="jewish">Jewish</option>
            <option value="korean">Korean</option>
            <option value="latin american">Latin American</option>
            <option value="meditteranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="nordic">Nordic</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vivatnamese">Vietnamese</option>
          
          </select>
        </div>
         


            
        </div>
    )

    
}

export default SearchBar;
