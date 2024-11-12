// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar p-4 bg-[#FFE3E3] text-gray-600 h-screen w-64">
      <h2 className="text-3xl font-black font-script mb-4">Dashboard</h2>
      {role === 'admin' && (
        <>
          <Link to="/add-operator" className="block py-2">Add Operator</Link>
          <Link to="/view-listings" className="block py-2">View Listings</Link>
        </>
      )}
      {role === 'bakeryAdmin' && (
        <>
          <Link to="/add-product" className="block py-2">Add Product</Link>
          <Link to="/view-products" className="block py-2">View Products</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
