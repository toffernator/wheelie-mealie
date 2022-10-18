import { NutritionData } from "../spoonacular/api"


interface Props {
  NutritionData: NutritionData
}

export default function DishCard(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col">
      <h3 className="font-sans text-lg">{props.NutritionData.dish}</h3>
      <div className="font-sans flex flex-row">
        <p>F: {props.NutritionData.fat.value.toString() + props.NutritionData.fat.unit}<i className="bi bi-dot"></i></p>
        <p>C: {props.NutritionData.carbs.value.toString() + props.NutritionData.carbs.unit}<i className="bi bi-dot"></i></p>
        <p>P: {props.NutritionData.protein.value.toString() + props.NutritionData.protein.unit}<i className="bi bi-dot"></i></p>
        <p>Cals: {props.NutritionData.calories.value.toString() + " " + props.NutritionData.calories.unit}</p>
      </div>
    </div>
  )
}
