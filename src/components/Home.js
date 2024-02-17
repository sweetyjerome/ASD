import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleTakeTestClick = () => {
    // Navigate to the form page when "Take Test" button is clicked
    navigate('/Form1');
  };
  return (
    <div className="container-main"  >
      <div className="row content">
        <div className="col-md-6" >
          <h1 className='heading' >Welcome to ASD Detection Site</h1>
          <p className='text'>
         where cutting-edge technology meets compassion in the pursuit of early
           identification and support for Autism Spectrum Disorder (ASD). ASD is a neurodevelopmental condition that affects 
           individuals in unique ways, making early detection crucial for timely intervention and support. Our platform leverages 
           state-of-the-art tools and assessments, guided by the latest research in autism detection, to provide a comprehensive 
           and user-friendly experience. Whether you are a concerned parent, caregiver, or healthcare professional, our mission is
            to empower you with accurate information and resources for a better understanding of ASD. Together, let's navigate the
             journey of ASD detection with empathy, accuracy, and the shared goal of improving lives.
          </p>
        </div>
        <div className="col-md-6 text-md-center button">
          <button className="btn btn-primary" onClick={handleTakeTestClick} >Take Test</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
