import React, { Component } from 'react'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage';
import Categories from './Components/Categories/Categories';
import fetchNews from './apiCalls'
import News from './Components/News/News'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [], 
      filteredNews: []

    }
  }

  componentDidMount() {
    fetchNews()
    .then((data) => {this.setState({news: data.articles})})
    .catch(error => console.log(error))
  }
  
  render() {
    console.log(this.state.news)
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" 
            render={(props) => <HomePage {...props} news={this.state.news} />}
            /> 
            {/* <Route path="/news/:id" component={NewsDetails} /> */}
          </Switch>
        </div>
      );
    }
  }

export default App;
