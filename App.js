import React, { Component } from 'react';
import Feeds from './Feeds';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Feeds />;
  }
}

export default App;
