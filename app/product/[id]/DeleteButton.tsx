"use client"
import { deleteProduct } from '@/app/lib/actions'
import React from 'react'

const DeleteButton = ({id}: {id: string}) => {
  return (
    <button onClick={() => deleteProduct(id)}>Delete Product</button>
  )
}

export default DeleteButton
