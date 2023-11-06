import React from 'react'
import { Product } from '../../lib/types'
import Link from 'next/link'
import Modal from '@/app/components/Modal'

const ProductDetailPage = async ({params} : {params : {id: string}} ) => {
  const data = await fetch(`http://localhost:3000/api/products/${params.id}`)
  const deserializedData = await data.json()
  const product : Product = deserializedData.data;


  return (
    <div className="w-full md:w-3/4 p-4 md:flex">
      {/* Mobile View: Image on Top */}
      <div className="md:hidden w-full mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </div>

       {/* Desktop View: Image on the Left */}
       <div className="hidden md:block w-1/3">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </div>

      {/* Description Section */}
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-gray-500">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <div className='flex flex-col mt-8 items-center gap-4 justify-start'>
          <Link href={`/`}>Back to Products</Link>
          <Modal title='Are you sure you want to delete?' id={String(product.id)}>
            <p>Clicking "Delete Product" is permanent and can't be reversed.</p>
          </Modal>
          <Link href={"?modalOpen=yes"}>Delete Product</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
