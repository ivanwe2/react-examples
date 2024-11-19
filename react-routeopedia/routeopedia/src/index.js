import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product/Product";
import CreateProduct from "./Pages/Product/CreateProduct";
import ProductDetails from "./Pages/Product/ProductDetails";
import ProductList from "./Pages/Product/ProductList";
import NotFound from "./Pages/NotFound";
import CryptoDetail from "./Pages/CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/crypto/:cryptoSymbol/:id" element={<CryptoDetail></CryptoDetail>}></Route>
          <Route path="/crypto/:cryptoSymbol" element={<CryptoDetail></CryptoDetail>}></Route>

          <Route path="product">
            <Route index element={<Product></Product>}></Route>
            <Route path="create" element={<CreateProduct></CreateProduct>}></Route>
            <Route path="details/:productId" element={<ProductDetails></ProductDetails>}></Route>
            <Route path="list" element={<ProductList></ProductList>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
