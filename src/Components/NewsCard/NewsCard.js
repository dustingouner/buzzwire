import React from 'react'
import { Link } from 'react-router-dom'
import './NewsCard.css'
import defaultImage from '../assets/newspaper2.jpeg'

function NewsCard( { articleId, image, title, date }  ) {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

  const imageSource = image ? image : defaultImage

  return (
    <Link to={`/news/${encodeURIComponent(title)}`} style={{textDecoration: 'none'}}>
    <div className="article">
      <img className="article-image" src={imageSource} alt={title} />
      <div>
        <p className="article-date">Published on {formatDate(date)}</p>
        <h2 className="article-title">{title}</h2>
      </div>
    </div>
  </Link>
);
}

export default NewsCard