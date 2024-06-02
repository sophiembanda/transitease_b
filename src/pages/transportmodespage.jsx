// src/pages/TransportModesPage.jsx
import React, { useEffect } from 'react';
import { useFormContext } from '../contexts/FormContext';
import '../css/transportmodes/transportmodes.css';

// Components
import TmpDetailsSection from '../components/transportmodescomponents/TmpDetailsSection';
import TmpActionButtons from '../components/transportmodescomponents/TmpActionButtons';
import TmpFeed from '../components/transportmodescomponents/TmpFeed';

const TransportModesPage = () => {
  const { formData, setFormData } = useFormContext();

  useEffect(() => {
    const fetchRouteInfo = async () => {
      const response = await fetch('http://localhost:5000/route_info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in request
      });
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        setFormData(data); // Update the context with route information
      }
    };
    fetchRouteInfo();
  }, [setFormData]);

  return (
    <div className="transport-modes-page flex-col">
      <h1>Transport Modes</h1>
      <p>Current Location: {formData.current_location}</p>
      <p>Destination: {formData.destination}</p>
      <TmpDetailsSection />
      <TmpActionButtons />
      <TmpFeed />
    </div>
  );
};

export default TransportModesPage;
