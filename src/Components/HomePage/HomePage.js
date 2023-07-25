import React from 'react';
import Categories from '../Categories/Categories';
import News from '../News/News';

const Homepage = (props) => {
  console.log('this', props.news)
  return (
    <>
      <Categories onCategorySelect={props.onCategorySelect}/>
      <News news={props.news}/>
    </>
  );
};

export default Homepage;