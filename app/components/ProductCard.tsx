import React from 'react'
import { Product } from '../lib/types'

const ProductCard = ({product} : { product: Product}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      <div className="bg-white shadow-lg rounded-lg">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover object-center" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard