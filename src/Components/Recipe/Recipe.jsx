import { ToastContainer, toast } from 'react-toastify';
import { IoTimeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";

const Recipe = ({recipe, handleCookButton}) => {
    let {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className="border-2 border[#cececf] rounded-2xl p-6">
            <img className="w-full" src={recipe_image}></img>
            <p className="text-xl font-semibold pt-5">{recipe_name}</p>
            <p className="font-normal text-base pt-2 text-[#878787] border-b-2 border[#cececf]">{short_description}</p>
            <p className="pt-3 text-lg font-semibold">Ingredients: 6</p>
            <ul className="list-disc pl-8 text-[#878787] font-normal text-base pt-4">
                {
                    ingredients.map((ingredient, idx)=>(
                            <li key={idx}>{ingredient}</li>

                    ))
                }
            </ul>
            <div className="flex items-center justify-start gap-3 pt-6">
                <div className="flex justify-start gap-2">
                    <span className="text-xl">< IoTimeOutline /></span>
                    {preparing_time} min
                </div> 
                <div className="flex justify-start gap-2">
                    <span className="text-xl"><SlFire /></span>
                    {calories} calories
                </div>
            </div>
            <button onClick={() => handleCookButton(recipe)} className="btn btn-outline rounded-full mr-5 px-7 mt-5 text-black font-semibold bg-[#0be58a] border-1 border-white">Want to Cook</button>
            <ToastContainer />
        </div>
    );
};

export default Recipe;


// {
//     hashtags.map((hash,idx) =>(
//         <span key={idx}><a href="">#{hash}</a></span>
//     ))
// }