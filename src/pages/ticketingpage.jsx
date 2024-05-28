// src/pages/TicketingPage.jsx
import React from 'react';
import { useUser } from '../contexts/UserContext';
import TpDetails from '../components/ticketingcomponents/TpDetails';
import TpGotoPay from '../components/ticketingcomponents/TpGotoPay';
import TpInputs from '../components/ticketingcomponents/TpInputs';
import TpSeats from '../components/ticketingcomponents/TpSeats';
import '../css/ticketingcss/ticketing.css';

const TicketingPage = () => {
  const { routeInfo } = useUser();

  return (
    <div className="ticketing-page flex-col">
      <h1>Ticketing</h1>
      <p>Current Location: {routeInfo.current_location}</p>
      <p>Destination: {routeInfo.destination}</p>
      <TpDetails />
      <TpInputs />
      <TpGotoPay />
    </div>
  );
};

export default TicketingPage;
