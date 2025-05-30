// src/components/common/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer mt-auto py-3 bg-white border-top">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <span className="text-muted">
              &copy; {currentYear} Healthcare System. All rights reserved.
            </span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <Link to="/super-admin/support" className="text-muted text-decoration-none small">
                Support
              </Link>
              <Link to="/super-admin/privacy" className="text-muted text-decoration-none small">
                Privacy Policy
              </Link>
              <Link to="/super-admin/terms" className="text-muted text-decoration-none small">
                Terms of Service
              </Link>
            </div>
            <div className="mt-1">
              <span className="text-muted small">Version 1.0.0</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;