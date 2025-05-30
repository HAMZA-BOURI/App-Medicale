import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// This is a simplified version without auth check for the initial setup
const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  
  // For demonstration, we'll allow access to all protected routes
  // In a real application, you would check auth state
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
