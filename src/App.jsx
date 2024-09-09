import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import ProductsPage from "./components/ProductsPage";
import AddUserPage from "./components/AddUserPage";
import AddProductPage from "./components/AddProductPage";


function App() {
  return (
    <Router>
      <div className="">
      <HomePage/>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/addUser" element={<AddUserPage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;