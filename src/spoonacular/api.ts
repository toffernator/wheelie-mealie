let fetchedDishes: Record<string, NutritionData> = {}

export interface Amount {
  unit: String,
  value: number,
}

export interface NutritionData {
  dish: String,
  calories: Amount,
  protein: Amount,
  carbs: Amount,
  fat: Amount,
}

type FetchParams = Parameters<typeof fetch>;
async function typedFetch<T>(...params: FetchParams): Promise<T> {
  return fetch(...params).then((resp) => resp.json() as Promise<T>);
}

function ReadApiKey(): string {
  // Not secure
  const key = process.env["REACT_APP_SPOONACULAR_KEY"]
  if (key === undefined) {
    // TODO: Find better way to fail?
    return "";
  }

  return key;
}

async function fetchNutritionalDataByDish(dish: string): Promise<NutritionData> {
  const opts: RequestInit = {
    method: "GET",
    redirect: "follow",
  }

  dish = dish.replaceAll(" ", "+");
  // TODO: Can I update dish without blocking?
  const resp = await typedFetch<NutritionData>("https://api.spoonacular.com/recipes/guessNutrition?apiKey=" + ReadApiKey() + "&title=" + dish, opts)
  resp.dish = dish
  return resp
}

async function memoFetchNutritionalDataByDish(dish: string): Promise<NutritionData> {
  if (localStorage.getItem(dish)) {
    // || should never hit since the if statement guarantuees that the item is non-null
    return JSON.parse(localStorage.getItem(dish) || "")
  }

  return fetchNutritionalDataByDish(dish)
    .then((d) => {
      localStorage.setItem(d.dish.toString(), JSON.stringify(d))
      return d
    })
}

export async function FetchNutritionalDataByDish(dish: string): Promise<NutritionData> {
  return memoFetchNutritionalDataByDish(dish)
}

