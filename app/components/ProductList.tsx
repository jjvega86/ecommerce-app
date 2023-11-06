import React from 'react'
import { Product } from '../lib/types';
import ProductCard from './ProductCard';

const ProductList = async () => {
    const fetchedData = await fetch("http://localhost:3000/api/products");
    const data = await fetchedData.json();
    const products: Product[] = data.data;
    
    return (
        <ul>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </ul>
    )
}

export default ProductList
