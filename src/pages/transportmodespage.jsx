import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import '../css/transportmodes/transportmodes.css';

// Components
import TmpDetailsSection from '../components/transportmodescomponents/TmpDetailsSection';
import TmpActionButtons from '../components/transportmodescomponents/TmpActionButtons';
import TmpFeed from '../components/transportmodescomponents/TmpFeed';

const TransportModesPage = () => {
  const { formData } = useFormContext();

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
}

export default TransportModesPage;
