import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="container-main">
      <h2 >About Us</h2>
      <p >Welcome to our website! We're dedicated to providing valuable information and resources for our users.</p>
      <h3 >Our Mission</h3>
      <p>Our mission is to empower individuals with the knowledge and tools they need to succeed in their endeavors.</p>
      <h3 >Our Team</h3>
      <ul>
        <li>John Doe - Founder & CEO</li>
        <li>Jane Smith - Head of Operations</li>
        <li>Tom Johnson - Lead Developer</li>
      </ul>
    </div>
  );
}

export default About;