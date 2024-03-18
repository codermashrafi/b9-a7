import SingleBottomSideBar from "../SingleBottomSideBar/SingleBottomSideBar";

const BottomSideBar = ({currentlyCook , cookingTime, calories}) => {
 
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold pt-5 pb-3 p-6 text-center">Currently cooking:{currentlyCook.length}</h1>
            <hr className="bg-[#d8d8da] w-3/4 text-center mx-auto h-[2px]"></hr>
            <table className="table w-12/12">
                <thead>
                    <tr>
                        <th className="text-[#878787] text-base font-medium">Name</th>
                        <th className="text-[#878787] text-base font-medium">Time</th>
                        <th className="text-[#878787] text-base font-medium">Calories</th>


                    </tr>
                </thead>
            </table>

            

            {
                currentlyCook.map((currentlyCookData, idx) =>(
                    <SingleBottomSideBar  key={idx} currentlyCookData={currentlyCookData}></SingleBottomSideBar>
                
                ))
            }
            <div className="flex items-center justify-end gap-8 pt-3 mr-12 pb-5">
                <p className="text-base font-semibold text-center">Total Time = {cookingTime}</p>
                <p className="text-base font-semibold text-center">Total Calories = {calories}</p>
            </div>


            




            
        </div>
    );
};
export default BottomSideBar;