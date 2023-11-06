import Link from 'next/link'
import React from 'react'
import AddProductForm from './AddProductForm'

const CreateProductPage = () => {
  return (
    <div>
      <h1>Create a Product, bru</h1>
      <AddProductForm />
      <Link href="/">Back to Products</Link>
    </div>
  )
}

export default CreateProductPage
