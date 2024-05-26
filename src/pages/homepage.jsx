import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/homecss/home.css';
import InfoCont from '../components/homecomponents/InfoCont';
import Features from '../components/homecomponents/Features';

const HomePage = () => {
  const [routeInfo, setRouteInfo] = useState(null);
  const [formData, setFormData] = useState({
    current_location: '',
    destination: '',
  });
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

  useEffect(() => {
    console.log('Title:', document.title);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      setRouteInfo(data);
      navigate('/');  // Navigates to the homepage to display the route info
    }
  };

  useEffect(() => {
    fetch('/route_info')
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          setRouteInfo(data);
        }
      })
      .catch(error => console.error('Error fetching route info:', error));
  }, []);

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
      {routeInfo && (
        <div className="route-info">
          <p>Start: {routeInfo.current_location}</p>
          <p>End: {routeInfo.destination}</p>
          <p>Route: {routeInfo.route}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
