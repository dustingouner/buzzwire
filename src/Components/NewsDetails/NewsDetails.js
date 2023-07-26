import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './NewsDetails.css';

function NewsDetails(props) {
  const { index } = useParams();
  const articleIndex = parseInt(index, 10); // Convert index from string to integer
  const article = props.news[articleIndex];

  if (!article) {
    return <div>Article Not Found!</div>;
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