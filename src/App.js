import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import fetchNews from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.fetchNewsByCategory('general'); 
  }

  fetchNewsByCategory = (category) => {
    fetchNews(category)
      .then((data) => {
        this.setState({ news: data.articles });
      })
      .catch((error) => {
        console.log('Error fetching news:', error);
        this.setState({ news: [] });
      });
  };

  render() {
    const { news } = this.state;

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <HomePage {...props} news={news} onCategorySelect={this.fetchNewsByCategory} />
                {news.length === 0 && <ErrorMessage message="Failed to fetch news. Please try again later." />}
              </div>
            )}
          />
          <Route
            path="/news/:index"
            render={(props) => <NewsDetails {...props} news={news} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
