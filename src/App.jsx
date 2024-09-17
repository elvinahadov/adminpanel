import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import AddUserPage from "./pages/AddUserPage";
import AddProductPage from "./pages/AddProductPage";
import CategoryPage from "./pages/CategoryPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import FAQpage from "./pages/FAQpage";
import AddFAQpage from "./pages/AddFAQpage";
import CommonPage from "./pages/CommonPage";
import AddCommonPage from "./pages/AddCommonPage";

function App() {
  return (
    <Router>
      <HomePage>
        <Routes>
            <Route path="/" element={""}>
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/addCategory" element={<AddCategoryPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/addUser" element={<AddUserPage />} />
            <Route path="/addProduct" element={<AddProductPage />} />
            <Route path="/faq" element={<FAQpage />} />
            <Route path="/addFaq" element={<AddFAQpage />} />
            <Route path="/common" element={<CommonPage />} />
            <Route path="/addCommon" element={<AddCommonPage />} />
            </Route>
        </Routes>
      </HomePage>
    </Router>
  );
}

export default App;
