import React, { useState } from 'react';
import Home from './Home'
const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

  
    if (username ==='V' && password === 'V') {
      setLoggedIn(true);
     
    } else {
      setLoggedIn(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p><Home /></p>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login Form</h2>
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;