import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCookButton}) => {
    let [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div  className='w-4/6'>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    recipes.map(recipe => (
                        <Recipe  handleCookButton={handleCookButton} recipe={recipe} key={recipe.recipe_id}></Recipe>
                    ))
                }

            </div>
        </div>
    );
};

export default Recipes;