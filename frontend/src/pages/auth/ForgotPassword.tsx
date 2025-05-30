import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    
    // For demonstration, just set a timeout
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body className="p-4">
        <h4 className="text-center mb-4">Forgot Password</h4>
        
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        
        {success ? (
          <Alert variant="success" className="mb-4">
            Password reset instructions have been sent to your email address.
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <p className="text-muted mb-4">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            
            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
            
            <div className="text-center">
              <Link to="/login" className="text-decoration-none">
                Back to Login
              </Link>
            </div>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};

export default ForgotPassword;
