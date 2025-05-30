// src/components/common/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { 
  HouseDoorFill, 
  BuildingFill, 
  PeopleFill, 
  ShieldLockFill, 
  CurrencyDollar, 
  ClipboardDataFill, 
  FileEarmarkTextFill,
  GearFill,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  CalendarWeekFill,
  BoxArrowRight
} from 'react-bootstrap-icons';

interface SidebarProps {
  collapsed: boolean;
  isOpen: boolean;
  isMobile: boolean;
  onToggle: () => void;
  onClose: () => void;
  user: {
    name: string;
    role: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  isOpen, 
  isMobile, 
  onToggle, 
  onClose, 
  user 
}) => {
  const location = useLocation();
  
  // Check if a route is active
  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };
  
  return (
    <div 
      className={`sidebar bg-dark text-white ${collapsed ? 'collapsed' : ''} ${isMobile ? 'mobile' : ''} ${isOpen ? 'open' : ''}`}
    >
      {/* Sidebar Header */}
      <div className="sidebar-header d-flex align-items-center justify-content-between p-3 border-bottom border-dark">
        <Link to="/super-admin/dashboard" className="text-white text-decoration-none">
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
              <span className="fw-bold">H</span>
            </div>
            {!collapsed && <h5 className="mb-0">HealthAdmin</h5>}
          </div>
        </Link>
        {isMobile && (
          <Button 
            variant="link" 
            className="p-0 text-white" 
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Button>
        )}
      </div>
      
      {/* Sidebar User Info */}
      <div className="sidebar-user p-3 border-bottom border-dark">
        <div className="d-flex align-items-center">
          <div 
            className="rounded-circle bg-white text-dark me-3 d-flex align-items-center justify-content-center" 
            style={{ width: '40px', height: '40px', fontSize: '1.1rem', fontWeight: 'bold' }}
          >
            {user?.name?.charAt(0) || 'U'}
          </div>
          {!collapsed && (
            <div>
              <h6 className="mb-0">{user?.name || 'Super Admin'}</h6>
              <span className="text-muted small">{user?.role || 'Administrator'}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Sidebar Navigation */}
      <div className="sidebar-nav p-2">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/dashboard"
              className={`px-3 py-2 ${isActive('/super-admin/dashboard') ? 'active' : ''}`}
              title="Dashboard"
            >
              <HouseDoorFill size={18} className="nav-icon" />
              {!collapsed && <span>Dashboard</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/hospitals"
              className={`px-3 py-2 ${isActive('/super-admin/hospitals') ? 'active' : ''}`}
              title="Hospitals"
            >
              <BuildingFill size={18} className="nav-icon" />
              {!collapsed && <span>Hospitals</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/users"
              className={`px-3 py-2 ${isActive('/super-admin/users') ? 'active' : ''}`}
              title="Users"
            >
              <PeopleFill size={18} className="nav-icon" />
              {!collapsed && <span>Users</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/roles"
              className={`px-3 py-2 ${isActive('/super-admin/roles') ? 'active' : ''}`}
              title="Roles & Permissions"
            >
              <ShieldLockFill size={18} className="nav-icon" />
              {!collapsed && <span>Roles & Permissions</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/financial"
              className={`px-3 py-2 ${isActive('/super-admin/financial') ? 'active' : ''}`}
              title="Financial"
            >
              <CurrencyDollar size={18} className="nav-icon" />
              {!collapsed && <span>Financial</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/calendar"
              className={`px-3 py-2 ${isActive('/super-admin/calendar') ? 'active' : ''}`}
              title="Calendar"
            >
              <CalendarWeekFill size={18} className="nav-icon" />
              {!collapsed && <span>Calendar</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/audit"
              className={`px-3 py-2 ${isActive('/super-admin/audit') ? 'active' : ''}`}
              title="Audit Logs"
            >
              <ClipboardDataFill size={18} className="nav-icon" />
              {!collapsed && <span>Audit Logs</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/documents"
              className={`px-3 py-2 ${isActive('/super-admin/documents') ? 'active' : ''}`}
              title="Document Access"
            >
              <FileEarmarkTextFill size={18} className="nav-icon" />
              {!collapsed && <span>Document Access</span>}
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/super-admin/settings"
              className={`px-3 py-2 ${isActive('/super-admin/settings') ? 'active' : ''}`}
              title="Settings"
            >
              <GearFill size={18} className="nav-icon" />
              {!collapsed && <span>Settings</span>}
            </Nav.Link>
          </Nav.Item>
          
          <div className="mt-4 border-top border-dark pt-2">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/logout"
                className="px-3 py-2 text-danger"
                title="Logout"
              >
                <BoxArrowRight size={18} className="nav-icon" />
                {!collapsed && <span>Logout</span>}
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </div>
      
      {/* Sidebar Footer */}
      <div className="sidebar-footer mt-auto p-3 border-top border-dark">
        <div className="d-flex align-items-center justify-content-between">
          {!collapsed && (
            <div className="small text-muted">
              HealthAdmin v1.0
            </div>
          )}
          <Button 
            variant="link" 
            className={`p-0 text-white ${collapsed ? 'mx-auto' : ''}`}
            onClick={onToggle}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? 
              <ArrowRightCircleFill size={18} /> : 
              <ArrowLeftCircleFill size={18} />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;