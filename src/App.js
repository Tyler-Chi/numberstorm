import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Mainarea from './components/mainarea';




class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Navbar />
        <Mainarea />
      </div>
    );
  }
}

export default App;
