import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductList() {
    const navigate = useNavigate();
  return (
    <div>ProductList
        <button onClick={() => navigate(-1)}>
            go back
        </button>
    </div>
  )
}

export default ProductList