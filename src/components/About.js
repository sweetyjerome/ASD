import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>Welcome to our website! We're dedicated to providing valuable information and resources for our users.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to empower individuals with the knowledge and tools they need to succeed in their endeavors.</p>
      <h3>Our Team</h3>
      <ul>
        <li>John Doe - Founder & CEO</li>
        <li>Jane Smith - Head of Operations</li>
        <li>Tom Johnson - Lead Developer</li>
      </ul>
      <h3>Contact Us</h3>
      <p>If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:info@example.com">info@example.com</a>.</p>
    </div>
  );
}

export default About;