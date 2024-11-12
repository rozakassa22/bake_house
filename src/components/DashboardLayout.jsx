// src/components/DashboardLayout.js
import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ role, children }) => {
  return (
    <div className="dashboard flex">
      <Sidebar role={role} />
      <div className="main-content flex-grow p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
