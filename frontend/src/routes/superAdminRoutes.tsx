import React from 'react';
// Removed the unused Navigate import

// Dashboard
import Dashboard from '../pages/superAdmin/dashboard/Dashboard';

// Import other pages as needed
// For now we're just creating a placeholder Dashboard

const superAdminRoutes = [
  // Dashboard
  {
    path: '/super-admin/dashboard',
    element: <Dashboard />
  },
  
  // Add more routes as components are created
];

export default superAdminRoutes;