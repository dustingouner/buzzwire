import React from 'react';
import { Link } from 'react-router-dom';
import './NewsDetails.css'

function NewsDetails(props) {
    console.log(props.match.params)
    console.log(props.news)
  const { id } = props.match.params;

  // Find the article in the state using the article ID
  const article = props.news.find((article) => article.title === id);

  if (!article) {
    return <div>Loading...</div>; // Add proper handling if the article is not found
  }

  return (
    <div className="news-details">
      <h2 className="title">{article.title}</h2>
      <p className="author">Author: {article.author}</p>
      <p className="published-date">Published on {new Date(article.publishedAt).toLocaleString()}</p>
      <p className="source">Source: {article.source.name}</p>
      <img className="image" src={article.urlToImage} alt={article.title} />
      <p className="description">Description: {article.description}</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NewsDetails;