import './spoonacular/api'
import ApiReqButton from './components/ApiReqButton';
import { NutritionData } from './spoonacular/api';
import { useState, useEffect } from 'react';
import DishList from './components/DishList';

interface TotalMacros {
  Fat: number,
  Carbohydrates: number,
  Protein: number,
  Calories: number,
}

function App() {
  let [meals, setMeals] = useState<Array<NutritionData>>([])
  let [totalMacros, setTotalMacros] = useState<TotalMacros>({ Protein: 0, Carbohydrates: 0, Fat: 0, Calories: 0 })

  function handleAdd(data: NutritionData) {
    let newMeals = [...meals, data]
    setMeals(newMeals)
  }

  function handleRemove(index: number) {
    let firstHalf = [...meals].slice(0, index)
    let secondHalf = [...meals].slice(index + 1, meals.length)
    setMeals(firstHalf.concat(secondHalf))
  }

  useEffect(() => {
    const newTotal = calculateTotalMacros(meals)
    setTotalMacros(newTotal)
  }, [meals])

  function calculateTotalMacros(dishes: Array<NutritionData>): TotalMacros {
    let total: TotalMacros = { Fat: 0, Carbohydrates: 0, Protein: 0, Calories: 0 }
    for (let i = 0; i < dishes.length; i++) {
      const meal = meals[i];
      total.Fat = parseFloat((total.Fat + meal.fat.value).toFixed(1))
      total.Carbohydrates = parseFloat((total.Carbohydrates + meal.carbs.value).toFixed(1))
      total.Protein = parseFloat((total.Protein + meal.protein.value).toFixed(1))
      total.Calories = parseFloat((total.Calories + meal.calories.value).toFixed(1))
    }
    return total
  }

  return (
    <div className="App md:container md:mx-auto">
      <ApiReqButton className="" OnSubmit={handleAdd} />
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
