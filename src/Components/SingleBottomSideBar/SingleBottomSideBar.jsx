import React from 'react';

const SingleBottomSideBar = ({currentlyCookData}) => {
    console.log(currentlyCookData)
    let {recipe_name, preparing_time, calories} = currentlyCookData;
    return (
        <div className="overflow-x-auto">
            <table className="table bg-[#f8f8f8] rounded-none">
                <tbody>
                    <tr>
                        <td className='w-[8%] py-3'>{recipe_name}</td>
                        <td className='w-1/6'>{preparing_time} min</td>
                        <td className='w-1/6'>{calories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
    );
};

export default SingleBottomSideBar;