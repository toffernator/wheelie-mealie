import { NutritionData } from "../spoonacular/api";
import DishCard from "./DishCard";

interface Props {
  Dishes: Array<NutritionData>
  OnCardRemove: (data: NutritionData) => void
}

export default function DishList(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  const listItems = props.Dishes.map((dish, index) => <li key={index}><DishCard NutritionData={dish} OnRemove={props.OnCardRemove} /></li>)

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}
