import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServerError: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="text-center">
          <h1 className="display-1 fw-bold">500</h1>
          <h2 className="mb-4">Server Error</h2>
          <p className="text-muted mb-4">
            Something went wrong on our servers. We're working to fix the issue.
            Please try again later or contact support if the problem persists.
          </p>
          <Button as={Link} to="/super-admin/dashboard" variant="primary">
            Back to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ServerError;
