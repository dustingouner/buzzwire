import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
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
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                news={this.state.news}
                onCategorySelect={this.fetchNewsByCategory} // Pass the callback function
              />
            )}
          />
          {/* <Route path="/news/:id" component={NewsDetails} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
