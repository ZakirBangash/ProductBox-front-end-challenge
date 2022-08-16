import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import BrowseItems from "./Pages/BrowseItems/BrowseItems";

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
              this is Cart
            </div>
          }
        />
        <Route
          path="add-item"
          element={
            <div className="app">
              <Header />
              this is add item
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
