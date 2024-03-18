import SingleSideBar from "../../SingleSideBar/SingleSideBar";

const Sidebar = ({cooks, handlePreparingButton, handleCookingTime,handleCalories}) => {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold pt-5 pb-3 p-6 text-center">Want to cook: {cooks.length}</h1>
            <hr className="bg-[#d8d8da] w-3/4 text-center mx-auto h-[2px]"></hr>
            <table className="table w-9/12">
                <thead>
                    <tr className="">
                        <th className="text-[#878787] text-base font-medium">Name</th>
                        <th className="text-[#878787] text-base font-medium">Time</th>
                        <th className="text-[#878787] text-base font-medium">Calories</th>
                    </tr>
                </thead>
            </table>
            {
                cooks.map(cook =>(
                    <SingleSideBar handleCookingTime={handleCookingTime} handleCalories={handleCalories} handlePreparingButton={handlePreparingButton} key={cook.recipe_id}  cook={cook}></SingleSideBar>
                
                ))
            }


        </div>
    );
};

export default Sidebar;