import { NutritionData } from "../spoonacular/api";
import DangerButton from "./DangerButton";
import DishCard from "./DishCard";

interface Props {
  Items: Array<NutritionData>
  OnRemove: (index: number) => void
}

export default function DishList(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  const listItems = props.Items.map((item, index) => {
    return (
      <li className="flex flex-row justify-between" key={index}>
        <DishCard NutritionData={item} />
        <DangerButton text={"remove"} onClick={() => props.OnRemove(index)} />
      </li>
    )
  })

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}
