// src/ProductList.js
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      <ul className="mt-4">
        {products.map(product => (
          <li key={product.id} className="border p-2 my-2">
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
