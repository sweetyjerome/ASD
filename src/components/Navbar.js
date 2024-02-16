import React from 'react';
import './Navbar.css';
import { Router } from 'react-router-dom';

function Navbar() {
  return (
   <>
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-start align-items-center ">
          <a className="navbar-brand navbar-heading" href="/">ASD</a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto custom-navbar-list">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item custom-margin">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item custom-margin">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   </>
  );
}

export default Navbar;