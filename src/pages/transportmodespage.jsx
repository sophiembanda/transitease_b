// src/pages/TransportModesPage.jsx
import React from 'react';
import { useUser } from '../contexts/UserContext';
import '../css/transportmodes/transportmodes.css';

// Components
import TmpDetailsSection from '../components/transportmodescomponents/TmpDetailsSection';
import TmpActionButtons from '../components/transportmodescomponents/TmpActionButtons';
import TmpFeed from '../components/transportmodescomponents/TmpFeed';

const TransportModesPage = () => {
  const { routeInfo } = useUser();

  return (
    <div className="transport-modes-page flex-col">
      <h1>Transport Modes</h1>
      <p>Current Location: {routeInfo.current_location}</p>
      <p>Destination: {routeInfo.destination}</p>
      <TmpDetailsSection />
      <TmpActionButtons />
      <TmpFeed />
    </div>
  );
};

export default TransportModesPage;
