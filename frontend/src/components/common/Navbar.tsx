// src/components/common/Navbar.tsx
import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Dropdown, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { 
  List, 
  Search, 
  Bell, 
  Envelope, 
  Person, 
  Gear, 
  BoxArrowRight,
  Moon,
  Sun,
  Building,
  DatabaseFill
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';

interface NavbarProps {
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, toggleMobileMenu, isMobile }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: 'New hospital registered',
      time: '5 minutes ago',
      read: false,
      icon: 'hospital',
      color: 'primary'
    },
    {
      id: 2,
      title: 'System update completed',
      time: '1 hour ago',
      read: false,
      icon: 'gear',
      color: 'success'
    },
    {
      id: 3,
      title: 'Database backup completed',
      time: '3 hours ago',
      read: true,
      icon: 'database',
      color: 'info'
    }
  ];
  
  // Mock messages data
  const messages = [
    {
      id: 1,
      sender: 'Dr. John Smith',
      message: 'Need access to patient records...',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      sender: 'Hospital Admin',
      message: 'Financial report is ready for review...',
      time: '3 hours ago',
      read: true
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchTerm);
  };
  
  const handleLogout = () => {
    logout();
  };
  
  return (
    <BSNavbar expand={false} className="top-navbar py-2 px-3 bg-white border-bottom">
      <div className="d-flex align-items-center w-100">
        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Button 
            variant="link" 
            className="p-0 me-3 d-lg-none"
            onClick={toggleMobileMenu}
          >
            <List size={24} />
          </Button>
        )}
        
        {/* Sidebar Toggle */}
        {!isMobile && (
          <Button 
            variant="link" 
            className="p-0 me-3 d-none d-lg-block"
            onClick={toggleSidebar}
          >
            <List size={24} />
          </Button>
        )}
        
        {/* Search Bar */}
        <Form className="d-none d-md-flex me-auto" onSubmit={handleSearch}>
          <InputGroup>
            <InputGroup.Text className="bg-light border-0">
              <Search size={16} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="bg-light border-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Form>
        
        {/* Right-aligned Nav Items */}
        <Nav className="ms-auto d-flex flex-row align-items-center">
          {/* Dark Mode Toggle */}
          <Nav.Item className="me-3">
            <Button 
              variant="link" 
              className="p-0 nav-link"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </Nav.Item>
          
          {/* Notifications */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="link" className="p-0 nav-link position-relative">
              <Bell size={20} />
              {notifications.filter(n => !n.read).length > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle badge-sm"
                >
                  {notifications.filter(n => !n.read).length}
                </Badge>
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end shadow-sm border-0 p-0" style={{ width: '300px' }}>
              <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Notifications</h6>
                <Badge bg="danger" pill>
                  {notifications.filter(n => !n.read).length} New
                </Badge>
              </div>
              <div className="notification-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <Dropdown.Item key={notification.id} className={`p-3 border-bottom ${!notification.read ? 'bg-light' : ''}`}>
                      <div className="d-flex">
                        <div className="me-3">
                          <div className={`bg-${notification.color} text-white rounded-circle p-2 d-flex align-items-center justify-content-center`} style={{ width: '36px', height: '36px' }}>
                            {notification.icon === 'hospital' && <Building size={16} />}
                            {notification.icon === 'gear' && <Gear size={16} />}
                            {notification.icon === 'database' && <DatabaseFill size={16} />}
                          </div>
                        </div>
                        <div>
                          <p className={`mb-0 ${!notification.read ? 'fw-bold' : ''}`}>{notification.title}</p>
                          <small className="text-muted">{notification.time}</small>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))
                ) : (
                  <div className="p-3 text-center text-muted">
                    No notifications to display
                  </div>
                )}
              </div>
              <div className="p-3 text-center border-top">
                <Link to="/super-admin/notifications" className="text-decoration-none">
                  View all notifications
                </Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          
          {/* Messages */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="link" className="p-0 nav-link position-relative">
              <Envelope size={20} />
              {messages.filter(m => !m.read).length > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle badge-sm"
                >
                  {messages.filter(m => !m.read).length}
                </Badge>
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end shadow-sm border-0 p-0" style={{ width: '300px' }}>
              <div className="p-3 border-bottom">
                <h6 className="mb-0">Messages</h6>
              </div>
              <div className="message-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {messages.length > 0 ? (
                  messages.map((message) => (
                    <Dropdown.Item key={message.id} className={`p-3 border-bottom ${!message.read ? 'bg-light' : ''}`}>
                      <div className="d-flex">
                        <div className="me-3">
                          <div className="avatar bg-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                            <Person size={20} />
                          </div>
                        </div>
                        <div>
                          <p className={`mb-0 ${!message.read ? 'fw-bold' : ''}`}>{message.sender}</p>
                          <small className="text-muted d-block">{message.message}</small>
                          <small className="text-muted">{message.time}</small>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))
                ) : (
                  <div className="p-3 text-center text-muted">
                    No messages to display
                  </div>
                )}
              </div>
              <div className="p-3 text-center border-top">
                <Link to="/super-admin/messages" className="text-decoration-none">
                  View all messages
                </Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          
          {/* User Profile */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="p-0 nav-link d-flex align-items-center">
              <div className="avatar-circle me-md-2 bg-primary text-white">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <span className="d-none d-md-inline">{user?.name || 'User'}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end shadow-sm border-0">
              <Dropdown.Item as={Link} to="/super-admin/settings/profile">
                <Person size={16} className="me-2" />
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/super-admin/settings/security">
                <Gear size={16} className="me-2" />
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                <BoxArrowRight size={16} className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </BSNavbar>
  );
};

export default Navbar;