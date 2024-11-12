import React, { useState } from "react";

// Sample data for products
const productsData = [
  { id: 1, category: "Bread", name: "Caramel Brownie", price: 23.00, originalPrice: 25.00, image: "assets/caramel-brownie.png" },
  { id: 2, category: "Savories", name: "Chicken Puff", price: 24.00, originalPrice: 26.00, image: "assets/chicken-puff.png" },
  { id: 3, category: "Cookies", name: "Chocolate Chip Cookies", price: 23.00, originalPrice: 25.00, image: "assets/chocolate-chip-cookies.png" },
  { id: 4, category: "Bread", name: "Garlic Bread", price: 18.00, originalPrice: 20.00, image: "assets/garlic-bread.png" },
  // Add more products here
];

const categories = ["All", "Bread", "Brownies", "Cookies", "Desserts", "Donuts", "Pastries", "Savories"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Sidebar for Categories (hidden on mobile, visible on large screens) */}
      <div className="hidden lg:block lg:w-1/4 mx-auto">
  <h2 className="text-4xl font-black font-script text-gray-800 mb-4 text-center">Categories</h2>
  <ul className="space-y-2 text-gray-700 text-center">
    {categories.map(category => (
      <li
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`cursor-pointer ${selectedCategory === category ? 'font-bold text-gray-900' : ''}`}
      >
        {category}
      </li>
    ))}
  </ul>
</div>


<div className="lg:w-3/4 lg:ml-auto lg:pr-12">
  {/* Header with Sorting Options */}
  <div className="bg-pink-100 py-8 text-center mb-6 rounded">
    <h1 className="text-3xl font-script font-bold text-gray-800">Shop</h1>
    <p className="text-gray-500 mt-2">Showing {filteredProducts.length} of {productsData.length} results</p>
  </div>

  <div className="flex justify-between items-center mb-4">
    <p className="text-gray-700">Showing {filteredProducts.length} results</p>
    <select className="border border-gray-300 rounded px-3 py-2 text-black">
      <option>Default sorting</option>
      <option>Sort by popularity</option>
      <option>Sort by average rating</option>
      <option>Sort by latest</option>
      <option>Sort by price: low to high</option>
      <option>Sort by price: high to low</option>
    </select>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredProducts.map(product => (
      <div key={product.id} className="border rounded-lg shadow-lg p-4 text-center">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-20 h-20 items-center flex object-cover rounded" />
          {product.originalPrice > product.price && (
            <span className="absolute top-2 right-2 bg-teal-200 text-teal-800 text-xs font-bold px-2 py-1 rounded">Sale</span>
          )}
        </div>
        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
        {product.originalPrice > product.price && (
          <p className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
        )}
        <p className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
        <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded font-semibold">Add To Cart</button>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default ShopPage;
