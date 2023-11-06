"use client"
import { deleteProduct } from '@/app/lib/actions'
import React from 'react'

const DeleteButton = ({id}: {id: string}) => {
  return (
    <button className='text-white bg-red-600 hover:bg-red-300 p-4' onClick={() => deleteProduct(id)}>Delete Product</button>
  )
}

export default DeleteButton
