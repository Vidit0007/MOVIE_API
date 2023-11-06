import React, { useState } from 'react';

function Register({ onRegister }) {
  

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
   if(newUsername && newPassword){
    if (users.some((u) => u.username === newUsername)) {
      alert('Username already taken');
    } else{
      
      users.push({ username: newUsername, password: newPassword });
      localStorage.setItem('users', JSON.stringify(users));
      onRegister();
      alert('Registration Successful');
    }
  }
  else{
    alert('Fill out the details!')
  }
  }
  return (
    <div className='container2'>
      <br />

      <h1 className='heading'>REGISTER</h1>
      <input
        className='input'
        type="text"
        placeholder="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        required

      />

      <input
        className='input'
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required

      />
      <br />
      <br />

      <button className='btn1' onClick={handleRegister}>Register</button>
      

      

    </div>
  );
}

export default Register
// import React, { useState } from 'react';


// function Register({ onRegister }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
   
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     users.push({ username, password });
//     localStorage.setItem('users', JSON.stringify(users));
//     if(!users.ok){
//       onRegister();
//     }
//     else{
//       alert("Please enter a valid user name and password");
//     }
   
//   };

//   return (
//     <div className='container2'>
//         <br/>
//       <h1 className='heading'>REGISTER</h1>
//       <input
//       className='input'
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
   
//       <input className='input'
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br/>
//       <br/>

//       <button className='btn1' onClick={handleRegister}>Register</button>
//     </div>
//   );
// }
// export default Register;
// // {loggedIn && (<div><button className="btn2" onClick={handleLogout}>Logout</button></div>)}

//add a skip button so that if the user have an account then it can directly go to the login page
/* <Register onRegister={() => setLoggedIn(true)} login={() => setLoggedIn(false)} /> */