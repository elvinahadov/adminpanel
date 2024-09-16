import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import AddUserPage from "./pages/AddUserPage";
import AddProductPage from "./pages/AddProductPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <HomePage>
        <Routes>
          <Route path="/" element={""}>
          <Route path="/categories" element={<CategoryPage/>}/>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/addUser" element={<AddUserPage />} />
            <Route path="/addProduct" element={<AddProductPage />} />
          </Route>
        </Routes>
      </HomePage>
    </Router>
  );
}

export default App;
