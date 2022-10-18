import { useState } from 'react'
import { NutritionData, FetchNutritionalDataByDish } from '../spoonacular/api'
import PrimaryButton from './PrimaryButton'

interface Props {
  OnSubmit: (data: NutritionData) => void
}

export default function ApiReqButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  function scaleByWeight(macro: number, grams: number) {
    const scale = macro * (grams / 100)
    return parseFloat(scale.toFixed(1))
  }

  async function handleSubmit(dish: string) {
    if (dish === "" || dish === null) return

    const data: NutritionData = await FetchNutritionalDataByDish(dish)

    data.fat.value = scaleByWeight(data.fat.value, grams)
    data.carbs.value = scaleByWeight(data.carbs.value, grams)
    data.protein.value = scaleByWeight(data.protein.value, grams)
    data.calories.value = scaleByWeight(data.calories.value, grams)
    props.OnSubmit(data)
  }

  let [dish, setDish] = useState("")
  let [grams, setGrams] = useState(100)

  const gramsValue = !grams && grams !== 0 ? '' : grams;

  return (
    <div className="flex flex-row justify-center items-center">
      <input className="w-4/5 border-2 rounded-xl" type="text" name="Dish" value={dish} onChange={(e) => setDish(e.target.value)} />
      <input className="w-1/5 border-2 rounded-xl" type="number" name="Grams" value={gramsValue} onChange={(e) => setGrams(parseInt(e.target.value))} />
      <PrimaryButton onClick={() => handleSubmit(dish)}><i className="bi bi-plus-lg"></i></PrimaryButton>
    </div>
  )
}
