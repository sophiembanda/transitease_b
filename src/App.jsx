// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import SignupPage from './pages/signuppage';
import TransportModesPage from './pages/transportmodespage';
import TicketingPage from './pages/ticketingpage';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transportmodespage" element={<TransportModesPage />} />
          <Route path="/ticketingpage" element={<TicketingPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="/login" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
