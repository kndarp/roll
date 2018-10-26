import React, { Component } from 'react';
import one from './assets/three.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      roll: "dice-roll"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={one} className={this.state.roll ? "dice-roll" : "dice-stop"}  alt="dice" />
          <p>
            <code>kndarp/roll</code> 
          </p>
        </header>
      </div>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      let current = this.state.roll;
      this.setState({
        roll: !current
      });
    }, 3000);
  }
}

export default App;
