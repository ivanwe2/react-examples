import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {productId} = useParams();
  return (
    <div>
        ProductDetails
        <p>Id: {productId}</p>
    </div>
  )
}

export default ProductDetails