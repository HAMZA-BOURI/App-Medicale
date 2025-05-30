import React, { useState } from 'react';
import { Card, Row, Col, Alert, Badge, Table, ProgressBar, Button, Form, InputGroup } from 'react-bootstrap';

const Dashboard = () => {
  // Mock data for the dashboard (as provided in your snippet)
  const hospitalStats = {
    totalHospitals: 150,
    activeHospitals: 142,
    inactiveHospitals: 5,
    suspendedHospitals: 3,
    recentHospitals: [
      { id: 1, name: 'Central Hospital', location: 'Casablanca', status: 'active', userCount: 120 },
      { id: 2, name: 'City Medical Center', location: 'Rabat', status: 'active', userCount: 98 },
      { id: 3, name: 'Regional Hospital', location: 'Marrakech', status: 'inactive', userCount: 45 }
    ]
  };

  const financialData = {
    totalRevenue: 165000000,
    totalExpenses: 127000000,
    netProfit: 38000000,
    topPerforming: [
      { name: 'University Hospital', revenue: 1400000, growth: 12 },
      { name: 'Central Hospital', revenue: 1250000, growth: 8 },
      { name: 'Memorial Hospital', revenue: 1100000, growth: 5 }
    ],
    underPerforming: [
      { name: 'Regional Hospital', expenses: 620000, loss: 4 },
      { name: 'Community Hospital', expenses: 580000, loss: 6 },
      { name: 'Rural Health Center', expenses: 520000, loss: 8 }
    ]
  };

  const userStats = {
    totalUsers: 4750,
    usersByRole: [
      { role: 'Administrators', count: 150, color: 'danger', percentage: 3 },
      { role: 'Doctors', count: 2200, color: 'primary', percentage: 46 },
      { role: 'Nurses', count: 1800, color: 'success', percentage: 38 },
      { role: 'Staff', count: 600, color: 'warning', percentage: 13 }
    ],
    recentActivity: [
      {
        userName: 'Dr. Mohammed Alami',
        action: 'Accessed patient records',
        timestamp: '10 minutes ago'
      },
      {
        userName: 'Admin User',
        action: 'Added new doctor account',
        timestamp: '1 hour ago'
      },
      {
        userName: 'Dr. Fatima Benali',
        action: 'Updated treatment plan',
        timestamp: '2 hours ago'
      }
    ]
  };

  const upcomingEvents = [
    {
      title: 'Monthly Review Meeting',
      date: '15 Jun 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room A'
    },
    {
      title: 'New Hospital Onboarding',
      date: '18 Jun 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Online'
    },
    {
      title: 'Financial Quarter Close',
      date: '30 Jun 2025',
      time: 'All Day',
      location: '-'
    }
  ];

  const systemAlerts = [
    {
      title: 'System Update',
      message: 'Scheduled maintenance at 2:00 AM EST. The system will be down for approximately 30 minutes.',
      type: 'info',
      dismissible: true
    }
  ];

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Component state
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-container p-3">
      {/* Header with Search */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h1 className="mb-1">Super Admin Dashboard</h1>
          <p className="text-muted mb-0">Welcome back, Administrator</p>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-md-end gap-2 mt-3 mt-md-0">
            <InputGroup className="w-auto">
              <InputGroup.Text className="bg-white border-end-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-start-0"
              />
            </InputGroup>
            <Button variant="primary" className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear me-md-2" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
              <span className="d-none d-md-inline">Settings</span>
            </Button>
            <Button variant="success" className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus me-md-2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              <span className="d-none d-md-inline">Add Hospital</span>
            </Button>
          </div>
        </Col>
      </Row>

      {systemAlerts.map((alert, index) => (
        <Alert
          key={index}
          variant={alert.type}
          dismissible={alert.dismissible}
          className="mb-4"
        >
          <strong>{alert.title}:</strong> {alert.message}
        </Alert>
      ))}

      {/* Summary Cards */}
      <Row className="mb-4 g-3">
        <Col xl={3} md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-building text-primary" viewBox="0 0 16 16">
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
                </svg>
              </div>
              <div className="ms-3">
                <h6 className="text-muted mb-1">Total Hospitals</h6>
                <h3 className="mb-0">{hospitalStats.totalHospitals}</h3>
                <div className="small text-success">
                  <span className="badge bg-success bg-opacity-10 text-success me-1">
                    {Math.round((hospitalStats.activeHospitals / hospitalStats.totalHospitals) * 100)}%
                  </span>
                  Active
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 bg-success bg-opacity-10 p-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people-fill text-success" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                </svg>
              </div>
              <div className="ms-3">
                <h6 className="text-muted mb-1">Total Users</h6>
                <h3 className="mb-0">{userStats.totalUsers}</h3>
                <div className="small text-success">
                  <span className="badge bg-success bg-opacity-10 text-success me-1">
                    {userStats.usersByRole[1].percentage}%
                  </span>
                  Doctors
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 bg-info bg-opacity-10 p-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-currency-dollar text-info" viewBox="0 0 16 16">
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>
              </div>
              <div className="ms-3">
                <h6 className="text-muted mb-1">Total Revenue</h6>
                <h3 className="mb-0">{formatCurrency(financialData.totalRevenue)}</h3>
                <div className="small text-success">
                  <span className="badge bg-success bg-opacity-10 text-success me-1">
                    {Math.round((financialData.netProfit / financialData.totalRevenue) * 100)}%
                  </span>
                  Profit Margin
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 bg-warning bg-opacity-10 p-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-graph-up text-warning" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                </svg>
              </div>
              <div className="ms-3">
                <h6 className="text-muted mb-1">Net Profit</h6>
                <h3 className="mb-0">{formatCurrency(financialData.netProfit)}</h3>
                <div className="small text-success">
                  <span className="badge bg-success bg-opacity-10 text-success me-1">
                    +8%
                  </span>
                  vs Last Year
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Hospital Overview & Upcoming Events */}
      <Row className="mb-4 g-3">
        <Col lg={7}>
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-transparent border-0 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Hospital Overview</h5>
              <div>
                <Form.Select size="sm" className="d-inline-block w-auto">
                  <option>All Hospitals</option>
                  <option>Active Only</option>
                  <option>Inactive Only</option>
                </Form.Select>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Hospital</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Users</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {hospitalStats.recentHospitals.map((hospital, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2 text-primary fw-bold text-center" style={{ width: '36px', height: '36px' }}>
                            {hospital.name.charAt(0)}
                          </div>
                          <span className="fw-medium">{hospital.name}</span>
                        </div>
                      </td>
                      <td>{hospital.location}</td>
                      <td>
                        <Badge bg={hospital.status === 'active' ? 'success' : 'warning'} pill>
                          {hospital.status}
                        </Badge>
                      </td>
                      <td>{hospital.userCount}</td>
                      <td className="text-center">
                        <Button variant="outline-primary" size="sm" className="me-1" title="View Hospital">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>
                        </Button>
                        <Button variant="outline-secondary" size="sm" title="Edit Hospital">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="bg-transparent border-0 text-end">
              <Button variant="link" className="text-decoration-none p-0">
                View All Hospitals
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle ms-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col lg={5}>
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-transparent border-0">
              <h5 className="mb-0">Upcoming Events</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="px-3 py-1">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="py-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary bg-opacity-10 rounded-3 p-2 text-center" style={{ width: '45px', height: '45px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 text-primary" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          </svg>
                          <div className="small fw-bold">{event.date.split(' ')[0]}</div>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-1">{event.title}</h6>
                        <div className="small text-muted">
                          <div>{event.date} | {event.time}</div>
                          <div>{event.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
             <Card.Footer className="bg-transparent border-0 text-end">
                <Button variant="link" className="text-decoration-none p-0">
                    View Calendar
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle ms-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
       {/* Financial Overview & User Stats - Simplified, you can expand as needed */}
      <Row className="mb-4 g-3">
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-transparent border-0">
              <h5 className="mb-0">Financial Overview</h5>
            </Card.Header>
            <Card.Body>
              <h6>Top Performing</h6>
              <Table responsive borderless size="sm">
                <thead>
                  <tr><th>Hospital</th><th>Revenue</th><th>Growth</th></tr>
                </thead>
                <tbody>
                  {financialData.topPerforming.map(h => (
                    <tr key={h.name}><td>{h.name}</td><td>{formatCurrency(h.revenue)}</td><td className="text-success">+{h.growth}%</td></tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-transparent border-0">
              <h5 className="mb-0">User Distribution</h5>
            </Card.Header>
            <Card.Body>
              {userStats.usersByRole.map(role => (
                <div key={role.role} className="mb-2">
                  <div className="d-flex justify-content-between"><span>{role.role}</span><span>{role.count} ({role.percentage}%)</span></div>
                  <ProgressBar variant={role.color} now={role.percentage} style={{ height: '6px' }} />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;