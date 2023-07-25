import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {

    return (
      <div>
        <Header/>
        <Categories/>
      </div>
    )
  }
}

export default App;
