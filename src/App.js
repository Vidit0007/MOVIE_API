import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import About from './About'
import Error from './Error'
import Contact from './Contact';

import Dashboard from './Dashboard';
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/" element={<Login />} />

      <Route  path="dashboard" element={<Dashboard />} />
      
     
      <Route path="error" element={<Error />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
