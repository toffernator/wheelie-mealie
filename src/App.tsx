import './spoonacular/api'
import ApiReqButton from './components/ApiReqButton';
import { NutritionData } from './spoonacular/api';
import { useState, useEffect } from 'react';
import DishList from './components/DishList';

// Dummy data

const Bread: NutritionData = {
  dish: "Bread",
  calories: { value: 430, unit: "calories" },
  carbs: { value: 53, unit: "g" },
  fat: { value: 12, unit: "g" },
  protein: { value: 13, unit: "g" },
}

interface TotalMacros {
  Fat: number,
  Carbohydrates: number,
  Protein: number,
  Calories: number,
}

function App() {
  let [meals, setMeals] = useState<Array<NutritionData>>([Bread])
  let [totalMacros, setTotalMacros] = useState<TotalMacros>({ Protein: 0, Carbohydrates: 0, Fat: 0, Calories: 0 })

  function handleAdd(data: NutritionData) {
    let newMeals = [...meals, data]
    setMeals(newMeals)
  }

  function handleRemove(index: number) {
    console.log("Removing ", index)
    let newMeals = [...meals].splice(index, 1)
    setMeals(newMeals)
  }

  useEffect(() => {
    const newTotal = calculateTotalMacros(meals)
    setTotalMacros(newTotal)
  }, [meals])

  function calculateTotalMacros(dishes: Array<NutritionData>): TotalMacros {
    let total: TotalMacros = { Fat: 0, Carbohydrates: 0, Protein: 0, Calories: 0 }
    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      total.Fat = total.Fat + meal.fat.value
      total.Carbohydrates += meal.carbs.value
      total.Protein += meal.protein.value
      total.Calories += meal.calories.value
    }
    return total
  }

  return (
    <div className="App md:container md:mx-auto">
      <ApiReqButton className="" OnSubmit={handleAdd} Name="Dish" />
      <div className="border-2 rounded-lg flex flex-row justify-evenly justify-items-center items-center text-center place-items-center divide-x">
        <p>F: {totalMacros.Fat}</p>
        <p>C: {totalMacros.Carbohydrates}</p>
        <p>P: {totalMacros.Protein}</p>
        <p>Cal: {totalMacros.Calories}</p>
      </div>
      <DishList className="" Items={meals} OnRemove={handleRemove} />
    </div>
  );
}


export default App;
