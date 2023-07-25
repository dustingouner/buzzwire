import React from 'react'
import './Categories.css'
// import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories-container'>
      <div className='top-row-buttons'>
        <button>General</button>
        <button>Entertainment</button>
        <button>Technology</button>
        <button>Sports</button>
      </div>
      <div className='bottom-row-buttons'>
        <button>Business</button>
        <button>Health</button>
        <button>Science</button>
      </div>
    </div>
  )
}

export default Categories