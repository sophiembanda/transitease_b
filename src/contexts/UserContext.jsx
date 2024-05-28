// src/contexts/UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [routeInfo, setRouteInfo] = useState({ current_location: '', destination: '' });

  return (
    <UserContext.Provider value={{ user, setUser, routeInfo, setRouteInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
