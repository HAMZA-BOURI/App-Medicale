import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Forbidden: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="text-center">
          <h1 className="display-1 fw-bold">403</h1>
          <h2 className="mb-4">Access Forbidden</h2>
          <p className="text-muted mb-4">
            You don't have permission to access this page.
            Please contact your administrator if you believe this is an error.
          </p>
          <Button as={Link} to="/super-admin/dashboard" variant="primary">
            Back to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Forbidden;
