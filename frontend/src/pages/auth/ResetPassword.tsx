import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  
  // Get token from URL
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!password || !confirmPassword) {
      setError('Please enter both password fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    if (!token) {
      setError('Invalid or missing reset token');
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

  // Show error if token is missing
  if (!token) {
    return (
      <Card className="shadow-sm">
        <Card.Body className="p-4">
          <h4 className="text-center mb-4">Reset Password</h4>
          <Alert variant="danger">
            Invalid or missing reset token. Please request a new password reset link.
          </Alert>
          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-decoration-none">
              Back to Forgot Password
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm">
      <Card.Body className="p-4">
        <h4 className="text-center mb-4">Reset Password</h4>
        
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        
        {success ? (
          <Alert variant="success" className="mb-4">
            Your password has been reset successfully.
            <div className="text-center mt-3">
              <Link to="/login" className="btn btn-primary">
                Back to Login
              </Link>
            </div>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                Password must be at least 8 characters long.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={loading}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
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

export default ResetPassword;
