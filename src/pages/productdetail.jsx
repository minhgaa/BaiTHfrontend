import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}

export default ProductDetails;
