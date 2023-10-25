import React from 'react'
import Header from './ASSETS/Header';

import {useNavigate} from 'react-router-dom'
function Error() {
    const navigate = useNavigate();
    const handle = (()=>{
        navigate('/')
    })
  return (
    
   <section className='error'>
    <Header />
    <button className='eb' onClick={handle}></button>
   </section>
  )
}

export default Error