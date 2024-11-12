// src/components/MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddOperator from './AddOperator';
import ViewListings from './ViewListings';
import AddProduct from './AddProduct';
import ViewProducts from './ViewProducts';

const MainContent = ({ role }) => {
  return (
    <div className="main-content p-4">
      <Routes>
        {role === 'admin' && (
          <>
            <Route path="add-operator" element={<AddOperator />} />
            <Route path="view-listings" element={<ViewListings />} />
          </>
        )}
        {role === 'bakeryAdmin' && (
          <>
            <Route path="add-product" element={<AddProduct />} />
            <Route path="view-products" element={<ViewProducts />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default MainContent;
