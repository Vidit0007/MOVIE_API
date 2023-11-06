import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// // // import React, { useState } from 'react';
// // // import Home from './Home';
// // // import About from './About';
// // // import Error from './Error';
// // // import Contact from './Contact';
// // // import Register from './Register';
// // // import Dashboard from './Dashboard';
// // // import Login from './Login';
// // // import './App.css';

// // // function App() {


// // //   const [loggedIn, setLoggedIn] = useState(false);
// // //   const [registeredIn, setRegisteredIn] = useState(false);

// // //   const handleLogin = () => {
// // //     setLoggedIn(true);
// // //   };
  
  
// // //   const handleLogout = () => {
 
// // //     localStorage.clear();
// // //     setLoggedIn(false)
// // //   }
// // //   const handleRegister = () => {
// // //     setRegisteredIn(true);
// // //   };

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route exact path="/" element={loggedIn ?<Home /> : registeredIn ? <Login onLogin={handleLogin} /> : <Register onRegister={handleRegister} />  } />
// // //         <Route path="about" element={<About />} />
// // //         <Route path="contact" element={<Contact />} />
// // //         <Route path="dashboard" element={loggedIn && <Dashboard loggedIn={loggedIn} onLogout={handleLogout} />}/>
// // //         <Route path="home" element={<Home />}/>

// // //         <Route path="*" element={<Error />} />
// // //         <Route/>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // import React, { useState } from 'react';
// // import Home from './Home';
// // import About from './About';
// // import Error from './Error';
// // import Contact from './Contact';
// // import Register from './Register';
// // import Dashboard from './Dashboard';
// // import Login from './Login';
// // import './App.css';

// // function App() {
// //   const [loggedIn, setLoggedIn] = useState(false);
// //   const [registeredIn, setRegisteredIn] = useState(false);

// //   const handleLogin = () => {
// //     setLoggedIn(true);
// //   };

// //   const handleLogout = () => {
   
// //     setLoggedIn(false);
// //     // After logout, you should redirect to the login page
// //     setRegisteredIn(false);
// //   };
// //   const handleDeleteAccount = () => {
// //    localStorage.clear();
// //     setLoggedIn(false);
// //     setRegisteredIn(false);
// //   };

// //   const handleRegister = () => {
// //     setRegisteredIn(true);
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route
// //           exact
// //           path="/"
// //           element={
// //             loggedIn ? (
// //               <Home />
// //             ) : registeredIn ? (
// //               <Login onLogin={handleLogin} />
// //             ) : (
// //               <Register onRegister={handleRegister} />
// //             )
// //           }
// //         />
// //         <Route path="about" element={<About />} />
// //         <Route path="contact" element={<Contact />} />
// //         <Route
// //           path="dashboard"
// //           element={loggedIn ? (
// //             <Dashboard loggedIn={loggedIn} onLogout={handleLogout} onDelete={handleDeleteAccount} />
// //           ) : (
// //             <Login onLogin={handleLogin} />
// //           )}
// //         />
// //         <Route path="home" element={<Home />} />
// //         <Route path="*" element={<Error />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import React, { useState } from 'react';
// import Home from './Home';
// import About from './About';
// import Error from './Error';
// import Contact from './Contact';
// import Register from './Register';
// import Dashboard from './Dashboard';
// import Login from './Login';
// import './App.css';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [registeredIn, setRegisteredIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
   
//     setLoggedIn(false);
//     // After logout, you should redirect to the login page
//     setRegisteredIn(false);
//   };

//   const handleRegister = () => {
//     setRegisteredIn(true);
//   };

//   const handleDeleteAccount = () => {
//     localStorage.clear();
    
//     // After deleting the account, you should redirect to the registration page
//     setRegisteredIn(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             loggedIn ? (
//               <Home />
//             ) : registeredIn ? (
//               <Login onLogin={handleLogin} />
//             ) : (
//               <Register onRegister={handleRegister} />
//             )
//           }
//         />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route
//           path="dashboard"
//           element={loggedIn ? (
//             <Dashboard loggedIn={loggedIn} onLogout={handleLogout} onDelete={handleDeleteAccount} />
//           ) : (
//             <Login onLogin={handleLogin} />
//           )}
//         />
//         <Route path="home" element={<Home />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
