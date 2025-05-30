// src/layouts/MainLayout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Toast, ToastContainer } from 'react-bootstrap';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import { useAuth } from '../hooks/useAuth';

interface SystemMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'danger' | 'warning' | 'info';
  autohide?: boolean;
  delay?: number;
}

const MainLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(localStorage.getItem('sidebarCollapsed') === 'true');
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [systemMessages, setSystemMessages] = useState<SystemMessage[]>([]);
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Create a unique ID for toast messages
  const createId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  
  // Add a system message/notification
  const addSystemMessage = (message: Omit<SystemMessage, 'id'>) => {
    const newMessage = {
      ...message,
      id: createId(),
      autohide: message.autohide !== false,
      delay: message.delay || 5000
    };
    
    setSystemMessages(prev => [...prev, newMessage]);
  };
  
  // Remove a system message
  const removeSystemMessage = (id: string) => {
    setSystemMessages(prev => prev.filter(msg => msg.id !== id));
  };
  
  // Check if user is authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { state: { from: location } });
    }
  }, [user, navigate, location, loading]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.toString());
  }, [sidebarCollapsed]);
  
  // Handle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  if (loading || !user) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="main-layout d-flex">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        isOpen={mobileMenuOpen}
        isMobile={isMobile}
        onToggle={toggleSidebar}
        onClose={() => setMobileMenuOpen(false)}
        user={user}
      />
      
      {/* Main Content */}
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {/* Top Navbar */}
        <Navbar 
          toggleSidebar={toggleSidebar}
          toggleMobileMenu={toggleMobileMenu}
          isMobile={isMobile}
        />
        
        {/* Toast Messages */}
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1060 }}>
          {systemMessages.map((msg) => (
            <Toast 
              key={msg.id} 
              bg={msg.type}
              onClose={() => removeSystemMessage(msg.id)}
              show={true}
              delay={msg.delay}
              autohide={msg.autohide}
            >
              <Toast.Header>
                <strong className="me-auto">{msg.title}</strong>
              </Toast.Header>
              <Toast.Body className={msg.type === 'danger' || msg.type === 'dark' ? 'text-white' : ''}>
                {msg.message}
              </Toast.Body>
            </Toast>
          ))}
        </ToastContainer>
        
        {/* Page Content */}
        <div className="page-content py-4 px-3 px-md-4">
          <Container fluid>
            <Outlet context={{ addSystemMessage }} />
          </Container>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;