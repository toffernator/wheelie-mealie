import { useState } from 'react'
import { NutritionData, FetchNutritionalDataByDish } from '../spoonacular/api'

interface Props {
  Name: string
  OnSubmit: (data: NutritionData) => void
}

export default function ApiReqButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  async function handleSubmit(dish: string) {
    // const data: NutritionData = await FetchNutritionalDataByDish(dish)

    const data: NutritionData = {
      dish: "Bread",
      calories: { value: 430, unit: "calories" },
      carbs: { value: 53, unit: "g" },
      fat: { value: 12, unit: "g" },
      protein: { value: 13, unit: "g" },
    }
    props.OnSubmit(data)
  }

  let [data, setData] = useState("")

  return (
    <>
      <input className="border-2 rounded-xl" type="text" name={props.Name} value={data} onChange={(e) => setData(e.target.value)} />
      <button className="border-2 rounded-sm hover:border-black" onClick={() => handleSubmit(data)}>Add</button>
    </>
  )
}
