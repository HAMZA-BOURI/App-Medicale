import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout d-flex">
      {/* Sidebar would go here */}
      <div className="sidebar bg-dark text-white">
        <div className="p-3 border-bottom border-dark">
          <h5 className="mb-0 text-white">Healthcare System</h5>
        </div>
        <div className="p-3">
          <p>Sidebar Navigation</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button className="nav-link border-0 bg-transparent">Profile</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link border-0 bg-transparent">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Page Content */}
        <div className="page-content py-4 px-3 px-md-4">
          <Container fluid>
            <Outlet />
          </Container>
        </div>
        
        {/* Footer */}
        <footer className="footer mt-auto py-3 bg-white border-top">
          <div className="container-fluid">
            <div className="text-muted text-center">
              &copy; {new Date().getFullYear()} Healthcare System. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;