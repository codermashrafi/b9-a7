import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'
import BottomSideBar from './Components/BottomSideBar/BottomSideBar';


function App() {

  let [cooks, setCook] = useState([]);
  let [currentlyCook, setCurrentlyCook] = useState([])
  let [cookingTime, setCookingTime] = useState(0);
  let [calories, setCalories] = useState(0);


  let handleCookingTime = (time) =>{
    let newCookingTime = cookingTime + time;
    setCookingTime(newCookingTime)
  }

  let handleCalories = (calorie) =>{
    let newCalories = calories + calorie;
    setCalories(newCalories);
  }


  let handleCookButton = (c) =>{
      let isExist = cooks.find(item => item.recipe_id ==  c.recipe_id);
      if(!isExist){
        let newSetCook = [...cooks, c];
        setCook(newSetCook);
      }else{
        toast("Already Exist!");
      }
  }



  let handlePreparingButton = (id) =>{
    let newCook = cooks.filter(item => item.recipe_id !== id.recipe_id);
    setCook(newCook);

    let newSetCurrentlyCook = [...currentlyCook, id]
    setCurrentlyCook(newSetCurrentlyCook)

console.log(id)
  }

  return (
    <>
      <Header></Header>
      <div className='flex items-start justify-between gap-6 container mx-auto '>
        <Recipes handleCookButton={handleCookButton}></Recipes>
        <div className='w-2/6  border-2 border[#cececf] rounded-2xl'>
          <Sidebar handleCookingTime={handleCookingTime}  handleCalories={handleCalories} handlePreparingButton={handlePreparingButton} cooks={cooks}></Sidebar>
          <BottomSideBar cookingTime={cookingTime} calories={calories} currentlyCook={currentlyCook}></BottomSideBar>
        </div>
      </div>
    </>
  )
}

export default App