import React from 'react'
import { Product } from '../lib/types'
import Link from 'next/link'

const ProductCard = ({product} : { product: Product}) => {
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-lg rounded-lg">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover object-center" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <Link href={`/product/${product.id}`}>
            <button className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
