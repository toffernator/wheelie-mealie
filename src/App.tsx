import './spoonacular/api'
import ApiReqButton from './components/ApiReqButton';
import { NutritionData } from './spoonacular/api';
import DishList from './components/DishList';
import { useState } from 'react';

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

  function handleSubmit(data: NutritionData) {
    let newMeals = [...meals, data]
    setMeals(newMeals)
  }

  return (
    <div className="App container mx-auto">
      <ApiReqButton className="" OnSubmit={handleSubmit} Name="Dish" />
      <DishList className="" Dishes={meals} />
    </div>
  );
}

export default App;