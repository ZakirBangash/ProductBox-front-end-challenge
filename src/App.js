import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import BrowseItems from "./Pages/BrowseItems/BrowseItems";
import AddItem from "./Pages/AddItem/AddItem";
import Cart from "./Pages/Cart/Cart";
import ShippingAddressScreen from "./Pages/Checkout/Shipping";
import PlaceOrderScreen from "./Pages/OrderScreen/OrderScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="browseItems"
          element={
            <div className="app">
              <Header />
              <BrowseItems />
            </div>
          }
        />
        <Route
          path="cart"
          element={
            <div className="app">
              <Header />
              <Cart />
            </div>
          }
        />
        <Route
          path="addItem"
          element={
            <div className="app">
              <Header />
              <AddItem />
            </div>
          }
        />
        <Route
          path="shipping"
          element={
            <div className="app">
              <Header />
              <ShippingAddressScreen />
            </div>
          }
        />
        <Route
          path="order"
          element={
            <div className="app">
              <Header />
              <PlaceOrderScreen />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <>
              <div className="h1">Not Found</div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
