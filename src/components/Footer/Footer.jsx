import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} The Treat Seat. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
