import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Cart/slice'
import { ProductType } from '../../types/product'

interface Props {
  product: ProductType
}

export default function AddToCart(props: Props) {
  const dispatch = useDispatch()
  const [buttonText, setButtonText] = useState('Add To Cart')

  const handleClick = () => {
    dispatch(addToCart(props.product));
    setButtonText('Thank you!');

    setTimeout(() => {
      setButtonText('Add To Cart');
    }, 2000);
  }

  return (
    <button
      aria-label="Add to cart"
      className="text-sm bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded cursor-pointer"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}