import { ProductType } from "../../types/product"
import AddToCart from "../AddToCart"

interface Props {
  product: ProductType
}

  export default function ProductCard(props: Props) {
    return (
      <div key={props.product.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img
            src={props.product.imageSrc}
            alt={props.product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              {props.product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{props.product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{props.product.price + ' ' + props.product.currency}</p>
          <AddToCart product={props.product} />
        </div>
      </div>
    )
  }