import './spoonacular/api'
import ApiReqButton from './components/ApiReqButton';
import { NutritionData } from './spoonacular/api';
import { useState } from 'react';
import DishList from './components/DishList';

// Dummy data

const Bread: NutritionData = {
  dish: "Bread",
  calories: { value: 430, unit: "calories" },
  carbs: { value: 53, unit: "g" },
  fat: { value: 12, unit: "g" },
  protein: { value: 13, unit: "g" },
}

function App() {
  let [meals, setMeals] = useState<Array<NutritionData>>([Bread])

  function handleAdd(data: NutritionData) {
    let newMeals = [...meals, data]
    setMeals(newMeals)
  }

  function handleRemove(index: number) {
    console.log("Removing ", index)
    let newMeals = [...meals].splice(index, 1)
    setMeals(newMeals)
  }

  return (
    <div className="App md:container md:mx-auto">
      <ApiReqButton className="" OnSubmit={handleAdd} Name="Dish" />
      <DishList className="" Items={meals} OnRemove={handleRemove} />
    </div>
  );
}

export default App;
