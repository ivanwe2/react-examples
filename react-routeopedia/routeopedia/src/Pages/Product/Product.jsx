import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      Product
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      <Link to={`/product/list`}>
        <button>See all</button>
      </Link>

      {
        goToProduct && <Navigate to="/product/details/3"></Navigate>
      }
      <button onClick={() => {
        setGoToProduct({goToProduct:true});
      }}>
        Navigate to prod 3
      </button>
    </div>
  );
}

export default Product;
