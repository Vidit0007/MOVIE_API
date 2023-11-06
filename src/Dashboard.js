import React from 'react';
import Header from './ASSETS/Header';


function Dashboard(props) {
  const {loggedIn, onLogout,onDelete} = props;
  
 
  return (
    <>
      <Header />
      <section className='dashboard'>
      {loggedIn && <button className="btn2" onClick={onLogout}>Logout</button>}
      <br/>
      <br/>
      {loggedIn && <button className="btn3" onClick={onDelete}>Delete Account</button>}
       </section>
    </>
  );
}

export default Dashboard;
