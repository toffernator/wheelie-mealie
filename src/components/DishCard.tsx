import { NutritionData } from "../spoonacular/api"


interface Props {
  NutritionData: NutritionData
}

export default function DishCard(props: Props) {
  return (
    <>
      <h3 className="font-sans text-lg">{props.NutritionData.dish}</h3>
      <div className="font-mono flex flex-row">
        <p>Fat: {props.NutritionData.fat.value.toString() + props.NutritionData.fat.unit + " | "} </p>
        <p>Carbs: {props.NutritionData.carbs.value.toString() + props.NutritionData.carbs.unit + " | "}</p>
        <p>Protein: {props.NutritionData.protein.value.toString() + props.NutritionData.protein.unit + " | "}</p>
        <p>Calories: {props.NutritionData.calories.value.toString() + " " + props.NutritionData.calories.unit + " |"}</p>
      </div>
    </>
  )
}
