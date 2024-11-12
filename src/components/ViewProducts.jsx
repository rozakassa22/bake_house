// src/components/ViewProducts.js
import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch products from Firestore
    const fetchProducts = async () => {
      // Example data - Replace with Firestore query
      const sampleProducts = [
        { id: 1, name: 'Croissant', price: 2.5 },
        { id: 2, name: 'Baguette', price: 1.8 },
      ];
      setProducts(sampleProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto h-screen p-4 bg-white text-gray-600">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewProducts;
