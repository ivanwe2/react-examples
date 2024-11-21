import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/DestinationList";
import DestinationFact from "./app/components/DestinationFact";
import ResetApp from "./app/components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <ResetApp></ResetApp>
      <Counter></Counter>
      <div className="p-4 border text-center">
        <h4 className="text-primary text-center">Destination list</h4>
        <DestinationList></DestinationList>
        <DestinationFact></DestinationFact>
      </div>
    </Provider>
  </React.StrictMode>
);
