import React from 'react'
import { addProduct } from '../../lib/actions'

const AddProductForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Add A New Product</h1>
        {/* Invoke the action using the "action" attribute */}
        <form action={addProduct} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Enter the product name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description:</label>
            <input
              type="text"
              name="description"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder='Enter description...'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price:</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder='Enter the price...'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder='Paste the image URL...'
            />
          </div>
          <button type='submit'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProductForm
