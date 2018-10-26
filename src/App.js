import React, { Component } from 'react';
import one from './assets/one.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={one} className="dice" alt="logo" />
          <p>
            <code>kndarp/roll</code> 
          </p>
        </header>
      </div>
    );
  }
}

export default App;
