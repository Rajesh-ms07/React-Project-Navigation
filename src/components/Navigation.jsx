import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
       <div className='dd' style={{color:'white'}}> <Link to="/">Home</Link></div>
       <div className='dd'>  <Link to="/About">About</Link></div>
       <div className='dd'>  <Link to="/Contact">Contact</Link></div>
       <div className='dd'>  <Link to="/Product">Product</Link></div>
      </>
    
  )
}

export default Navigation;
