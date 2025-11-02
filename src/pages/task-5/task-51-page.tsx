import { Label } from "@/components/ui/label"
import data from "./data/data.json"

type Item = {
  name: string
  price: number
}

export function Task51Page() {

  return (
    <div className="overflow-auto w-full h-full">
      <div className="container">
        <div className="h-12"></div>
        <h1 className="font-semibold text-xl mb-1">
          Daftar Makanan
        </h1>
        <div className="flex flex-wrap gap-3">
          {data.foods.map(({ price, name }: Item) => (
            <div key={name}
                 className="w-40 border p-4 rounded-lg">
              <Label className="font-semibold">
                {name}
              </Label>
              <div className="text-sm">
                Rp{price.toLocaleString("en-US")}
              </div>
            </div>
          ))}
        </div>
        <div className="h-6"></div>
        <h1 className="font-semibold text-xl mb-1">
          Daftar Minuman
        </h1>
        <div className="flex flex-wrap gap-3">
          {data.beverages.map(({ price, name }: Item) => (
            <div key={name}
                 className="w-40 border p-4 rounded-lg">
              <Label className="font-semibold">
                {name}
              </Label>
              <div className="text-sm">
                Rp{price.toLocaleString("en-US")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}