import { NutritionData } from "../spoonacular/api";
import DishCard from "./DishCard";

interface Props {
  Dishes: Array<NutritionData>
}

export default function DishList(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  const listItems = props.Dishes.map((dish, index) => <li key={index}><DishCard NutritionData={dish} /></li>)

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}
