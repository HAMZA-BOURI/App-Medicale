import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NotFound: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackToDashboard = () => {
    navigate('/super-admin/dashboard'); // Navigate function
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          {/* Updated Button */}
          <Button variant="primary" onClick={handleBackToDashboard}>
            Back to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;