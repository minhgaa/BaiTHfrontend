import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/product").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
