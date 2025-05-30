import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout bg-light">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8} lg={6} xl={5}>
            <div className="text-center mb-4">
              <h3 className="mb-1">Healthcare System</h3>
              <p className="text-muted">Super Admin Portal</p>
            </div>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
