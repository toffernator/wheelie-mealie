import { useState } from 'react'
import { NutritionData, FetchNutritionalDataByDish } from '../spoonacular/api'
import PrimaryButton from './PrimaryButton'

interface Props {
  Name: string
  OnSubmit: (data: NutritionData) => void
}

const bread: NutritionData = {
  dish: "Bread",
  calories: { value: 430, unit: "calories" },
  carbs: { value: 53, unit: "g" },
  fat: { value: 12, unit: "g" },
  protein: { value: 13, unit: "g" },
}

export default function ApiReqButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  async function handleSubmit(dish: string) {
    const data: NutritionData = await FetchNutritionalDataByDish(dish)
    props.OnSubmit(data)
  }

  let [data, setData] = useState("")

  return (
    <div className="flex flex-row justify-center items-center">
      <input className="w-4/5 border-2 rounded-xl" type="text" name={props.Name} value={data} onChange={(e) => setData(e.target.value)} />
      <PrimaryButton onClick={() => handleSubmit(data)}><i className="bi bi-plus-lg"></i></PrimaryButton>
      {/* <PrimaryButton onClick={() => props.OnSubmit(bread)}>Add Bread</PrimaryButton> */}
    </div>
  )
}
