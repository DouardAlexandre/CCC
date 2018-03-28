import React, { Component } from 'react';
import './App.css';
import ControlledInput from './components/form.js';
import Aside from './components/aside.js';
import Header from './components/header.js';
import ReactGA from 'react-ga';


class App extends Component {

  constructor(props) {
      super(props);
      // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
      ReactGA.initialize('UA-116111650-1');
      // This just needs to be called once --> no routes.
      ReactGA.pageview(window.location.pathname);
      
      this.state = {
        coins: "",
        nums:"",
      }
  }
  callCoins = ( coins ) => {
    this.setState({ coins: coins });
  }
  callNums = ( nums ) => {
    this.setState({ nums: nums });
  }
  triggrWrite(){
    this.controlledInput.write();
  }
  reset(){
    this.controlledInput.reset();
  }
  render() {
    return (

      <div className="App">
      
        <Header />

        <div className="change_coin">

          <ControlledInput
            passCoins= {this.callCoins} 
            passNums= {this.callNums}
            ref={controlledInput => this.controlledInput = controlledInput}/>
          
          <Aside 
            coins= {this.state.coins} 
            nums= {this.state.nums}
            reset=  {this.reset.bind(this)}
            onclick = {this.triggrWrite.bind(this)}/>
            
        </div>
        
        <footer className="App-footer"></footer>

      </div>
    );
  }
}
export default App;
