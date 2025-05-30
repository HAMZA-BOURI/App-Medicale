import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Simulate login
    setLoading(true);
    
    // For demonstration, just set a timeout
    setTimeout(() => {
      setLoading(false);
      
      // Mock successful login
      if (email === 'admin@example.com' && password === 'password') {
        // Redirect would happen here
        console.log('Login successful');
      } else {
        setError('Invalid credentials');
      }
    }, 1000);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body className="p-4">
        <h4 className="text-center mb-4">Log In</h4>
        
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group className="mb-4">
            <div className="d-flex justify-content-between mb-2">
              <Form.Label>Password</Form.Label>
              <Link to="/forgot-password" className="text-decoration-none small">
                Forgot Password?
              </Link>
            </div>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
