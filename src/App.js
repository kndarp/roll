import React, { Component } from 'react';
import one from './assets/one.svg';
import two from './assets/two.svg';
import three from './assets/three.svg';
import four from './assets/four.svg';
import five from './assets/five.svg';
import six from './assets/six.svg';
import './App.css';
import { Button } from '@material-ui/core/Button';

const faces = [one, two, three, four, five, six];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      roll: false, 
      face: five
    }
  }

  randomizeFace(){
    let interval = setInterval(()=>{
        this.setState({
          face: faces[Math.floor(Math.random() * faces.length)]
        })
      },10);
    setTimeout(2500);
    clearInterval(interval);
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={this.state.face} className={this.state.roll ? "dice-roll" : "dice-stop"}  alt="dice" />
          <p>
            <code>kndarp/roll</code> 
          </p>
          <Button className="roll-button">Roll</Button>
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
