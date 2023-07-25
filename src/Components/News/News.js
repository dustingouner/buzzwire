import React from 'react'
import NewsCard from '../NewsCard/NewsCard.js'
import './News.css'


function News( {news} ) {
  console.log('news', news)
  const articleCards = news.map((article, index) => (
    
      <NewsCard 
      key={index}
      image={article.urlToImage}
      title={article.title}
      date={article.publishedAt}
      />
    
  ))
  return (
    <div className='card-container'>
      {articleCards}
    </div>
  )

}

export default News