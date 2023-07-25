import React from 'react'
import './NewsCard.css'

function NewsCard( { image, title, date } ) {
  return (
    <div className='article'>
      <img 
      className='article-image'
      src={image}
      alt={title} 
      />
      <div>
        <p className='article-date'>{date}</p>
        <h2 className='article-title'>{title}</h2>
      </div>
    </div>
  )
}

export default NewsCard