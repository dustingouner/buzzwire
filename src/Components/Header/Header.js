import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {

  const formatDate = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString(undefined, options);
  };

  return (
    <header className='header'>
      <Link to="/" className='buzzwire-link'>
        <h1 className='buzzwire-title'>BuzzWire</h1>
      </Link>

      
      <h2 className='date-element'>{formatDate()}</h2>
    </header>
  )
}

export default Header