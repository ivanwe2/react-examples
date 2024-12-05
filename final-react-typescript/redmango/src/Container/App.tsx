import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound } from "../Pages";

function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/details/:menuItemId"
            element={<MenuItemDetails></MenuItemDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
