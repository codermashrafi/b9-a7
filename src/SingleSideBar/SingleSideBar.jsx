import React from 'react';

const SingleSideBar = ({cook,handlePreparingButton,handleCookingTime,handleCalories}) => {

    let handleButtonClick = (cook, preparing_time, calories) => {
        handlePreparingButton(cook, recipe_id);
        handleCookingTime(preparing_time);
        handleCalories(calories);
      }
    let {recipe_name, preparing_time, calories, recipe_id} = cook;
    return (
        <div className="overflow-x-auto">
            <table className="table bg-[#f8f8f8] rounded-none">
                <tbody>
                    <tr>
                        <td className='w-1/4 py-3'>{recipe_name}</td>
                        <td className='w-1/4'>{preparing_time} min</td>
                        <td className='w-1/4'>{calories} calories</td>
                        <button onClick={() => handleButtonClick(cook, preparing_time,calories)}  className="btn my-3 btn-outline rounded-full mr-5 px-7 text-black font-semibold bg-[#0be58a] border-1 border-white">Preparing</button>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default SingleSideBar;