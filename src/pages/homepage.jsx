// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import '../css/homecss/home.css';
import InfoCont from '../components/homecomponents/InfoCont';
import Features from '../components/homecomponents/Features';

const HomePage = () => {
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.noModule = true;
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in request
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      navigate('/transportmodespage');  // Navigate to Transport Modes page
    }
  };

  return (
    <div>
      <InfoCont />
      <div className="section2">
        <Features />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="current_location"
          placeholder="Current Location"
          value={formData.current_location}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Get Route</button>
      </form>
    </div>
  );
};

export default HomePage;
