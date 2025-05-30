import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// This is a simplified version without auth check for the initial setup
const PublicRoute: React.FC = () => {
  const location = useLocation();
  
  // For demonstration, we'll consider the user as not authenticated
  // In a real application, you would check auth state
  const isAuthenticated = false;
  
  if (isAuthenticated) {
    const from = location.state?.from?.pathname || '/super-admin/dashboard';
    return <Navigate to={from} replace />;
  }
  
  return <Outlet />;
};

export default PublicRoute;
