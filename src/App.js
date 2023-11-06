import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Error from './Error';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registeredIn, setRegisteredIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleRegister = () => {
    setRegisteredIn(true);
  };

  const handleDeleteAccount = () => {
    localStorage.clear();
   
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            loggedIn ? (
              <Home />
            ) : registeredIn ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="dashboard"
          element={loggedIn ? (
            <Dashboard loggedIn={loggedIn} onLogout={handleLogout} onDelete={handleDeleteAccount}  />
          ) : (
            <Register onRegister={handleRegister} />&&<Login onLogin={handleLogin} />
          )}
        />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

 


