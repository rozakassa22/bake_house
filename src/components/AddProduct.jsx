// src/components/AddProduct.js
import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    // TODO: Save product to Firestore
    console.log(`Add product: ${productName}, Price: ${price}`);
    setProductName('');
    setPrice('');
  };

  return (
    <div className="container mx-auto h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
          placeholder="Enter product name"
        />
        <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
          placeholder="Enter price"
        />
        <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
