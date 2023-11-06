
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navi =useNavigate();
  const handle =()=>{
    navi('/')
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container1'>
      <br />

      <h1 className='heading2'>LOGIN FORM</h1>
      <input
        className='input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required

      />
      <br />
      <br />

      <button className='btn1' onClick={handleLogin}>Login</button>
      <br/>
      <br/>
      <button className='btn1' onClick={handle}>Register</button>
    </div>
  );
}

export default Login;
