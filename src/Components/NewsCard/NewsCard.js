import React from 'react'
import './NewsCard.css'

function NewsCard( { image, title, date } ) {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }


  return (
    <div className='article'>
      <img 
      className='article-image'
      src={image}
      alt={title} 
      />
      <div>
        <p className='article-date'>Published on {formatDate(date)}</p>
        <h2 className='article-title'>{title}</h2>
      </div>
    </div>
  )
}

export default NewsCard