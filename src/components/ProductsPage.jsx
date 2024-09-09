import React from "react";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

const ProductsPage = () => {
  const [productData, setProductData] = useState([]);
  const [addedProduct, setAddedProduct] = useState(false);
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) {
          console.log(
            `Failed to fetch products.`
          );
          return;
        }

        const result = await response.json();
        const products = Array.isArray(result.data) ? result.data : [];
        setProductData(products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const productDeleteHandler = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log(`Failed to delete product.`);
        return;
      }
      setProductData(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };
  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
        <div><button className="border-pink-700 border-2 rounded-lg py-1 px-4 bg-red-800 text-white font-bold" onClick={()=>setAddedProduct(!addedProduct)}>Add Product</button></div>
       
       <div className={`${addedProduct ? "hidden" : "block" } flex flex-col gap-3 w-64 items-center justify-center`}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Quantity" />
        <input type="file"  />
       </div>
      {productData.map((product) => (
        <SingleProduct
          key={product._id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          productDeleteHandler={() => productDeleteHandler(product._id)}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
