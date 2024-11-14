import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Counter from "./components/Counter";
import MoviePage from "./components/MovieComponents/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <div className="p-2 m-2 row text-center">
      <Counter></Counter>
      <MoviePage/>
    </div>
  </React.StrictMode>
);
