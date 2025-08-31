import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Container className="text-center">
        {/* Hero Section */}
        <div className="hero-content">
          <h1 className="hero-title">Welcome to The Treat Seat</h1>
          <p className="hero-subtitle">
            Your ultimate destination for delicious treats, crafted fresh daily!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap hero-buttons">
            <Button className="btn-primary-custom btn-lg">Order Now</Button>
            <Button className="btn-secondary-custom btn-lg">Explore Menu</Button>
          </div>
        </div>

        {/* Feature Section */}
        <Row className="justify-content-center features mt-5">
          <Col md={4} className="mb-4">
            <div className="feature-card shadow rounded p-4 h-100">
              <div className="feature-icon">🍪</div>
              <h2>Freshly Baked</h2>
              <p>Enjoy a wide variety of freshly baked goods, made daily with love.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="feature-card shadow rounded p-4 h-100">
              <div className="feature-icon">🎃</div>
              <h2>Seasonal Specials</h2>
              <p>Try our limited-time seasonal treats and desserts.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="feature-card shadow rounded p-4 h-100">
              <div className="feature-icon">🛵</div>
              <h2>Online Ordering</h2>
              <p>Order your favorite treats online and get them delivered to your doorstep.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
