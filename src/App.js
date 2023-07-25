import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import fetchNews from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.fetchNewsByCategory('general'); // Fetch news initially for the 'general' category
  }

  fetchNewsByCategory = (category) => {
    fetchNews(category)
      .then((data) => {
        this.setState({ news: data.articles });
      })
      .catch((error) => {
        if (error) {
          this.setState ({ news: [] }) 
        } else {
          console.log('Other error', error)
        }
  });
  }
  render() {
    const { news } = this.state
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <HomePage {...props} news={this.state.news} onCategorySelect={this.fetchNewsByCategory} />
                {news.length === 0 && <ErrorMessage message="Failed to fetch news. Please try again later." />}
              </div>
              )}

          />
          <Route
            path="/news/:id"
            render={(props) => <NewsDetails {...props} news={this.state.news} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
