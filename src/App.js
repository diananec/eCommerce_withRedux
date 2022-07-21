import React from "react";
import BasketView from "./components/BasketView";
import Header from "./components/Header";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-4">
      <Router>
        <Header />
        <Routes>
          <Route path="/checkout" element={<BasketView />} />

          <Route
            path="/"
            element={
              <div>
                {" "}
                <Product id="1234" title="iPad Pro 2021" price={2000} />
                <Product
                  id="9999"
                  title="Soft Skillz by John Sonmez"
                  price={30}
                />
                <Product id="5678" title="Rubix Cube" price={5} />
                <BasketView />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
