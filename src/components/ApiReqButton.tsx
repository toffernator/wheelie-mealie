import { useState } from 'react'
import { NutritionData, FetchNutritionalDataByDish } from '../spoonacular/api'

interface Props {
  Name: string
  OnSubmit: (data: NutritionData) => void
}

export default function ApiReqButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  async function handleSubmit(dish: string) {
    const data: NutritionData = await FetchNutritionalDataByDish(dish)
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
