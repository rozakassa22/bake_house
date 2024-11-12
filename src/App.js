// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/layout';
import Hero from './components/Hero';
import ProductSlider from './components/Products';
import CustomizeSection from './components/Customize';
import ShopPage from './pages/ShopPage';
import Account from './pages/AccountPage';
import ContactUs from './pages/ContactUsPage';
import AboutUsPage from './pages/aboutuspage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardLayout';
import AddOperator from './components/AddOperator';
import ViewListings from './components/ViewListings';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';


function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <div className="bg-white">
              <Hero />
              <ProductSlider />
              <CustomizeSection />
            </div>
          </Layout>
        } />
        <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
        <Route path="/account" element={<Layout><Account setRole={setRole} /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUsPage /></Layout>} />

        {/* Dashboard Routes with Sidebar and Main Content */}
        <Route path="/add-operator" element={
          <div className="dashboard-layout flex">
            <Sidebar role={role} />
            <div className="main-content flex-grow">
              <AddOperator />
            </div>
          </div>
        } />
        <Route path="/view-listings" element={
          <div className="dashboard-layout flex">
            <Sidebar role={role} />
            <div className="main-content flex-grow">
              <ViewListings />
            </div>
          </div>
        } />
        <Route path="/add-product" element={
          <div className="dashboard-layout flex">
            <Sidebar role={role} />
            <div className="main-content flex-grow">
              <AddProduct />
            </div>
          </div>
        } />
        <Route path="/view-products" element={
          <div className="dashboard-layout flex">
            <Sidebar role={role} />
            <div className="main-content flex-grow">
              <ViewProducts />
            </div>
          </div>
        } />

        {/* Redirect unauthorized users to Account page */}
        <Route path="/dashboard" element={role ? <Navigate to="/add-operator" /> : <Navigate to="/account" />} />
      </Routes>
    </Router>
  );
}

export default App;