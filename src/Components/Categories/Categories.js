import React, { useState } from 'react';
import './Categories.css';

function Categories({ onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className='categories-container'>
      <div className='top-row-buttons'>
        <button onClick={() => handleCategoryClick('general')} className={selectedCategory === 'general' ? 'active' : ''}>
          General
        </button>
        <button onClick={() => handleCategoryClick('entertainment')} className={selectedCategory === 'entertainment' ? 'active' : ''}>
          Entertainment
        </button>
        <button onClick={() => handleCategoryClick('technology')} className={selectedCategory === 'technology' ? 'active' : ''}>
          Technology
        </button>
        <button onClick={() => handleCategoryClick('sports')} className={selectedCategory === 'sports' ? 'active' : ''}>
          Sports
        </button>
      </div>
      <div className='bottom-row-buttons'>
        <button onClick={() => handleCategoryClick('business')} className={selectedCategory === 'business' ? 'active' : ''}>
          Business
        </button>
        <button onClick={() => handleCategoryClick('health')} className={selectedCategory === 'health' ? 'active' : ''}>
          Health
        </button>
        <button onClick={() => handleCategoryClick('science')} className={selectedCategory === 'science' ? 'active' : ''}>
          Science
        </button>
      </div>
    </div>
     );
    }
    
    export default Categories;