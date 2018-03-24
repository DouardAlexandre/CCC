import React, { Component } from 'react';
import './App.css';
import ControlledInput from './components/form.js';
import ReactGA from 'react-ga';


class App extends Component {
   constructor() {
    super();
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-116111650-1');
    // This just needs to be called once --> no routes.
    ReactGA.pageview(window.location.pathname);
  }
  render() {

    return (

      <div className="App">
      
        <header className="App-header">
          <div className="logo"></div>  
          <h1 className="App-title">Crypto Currency Converter</h1>
        </header>
     
        <div className="photo_header"></div>

        <div className="change_coin">

          <ControlledInput />
          <div className="aside">
            <p></p>
            <p>Data from <a className="aside_a" href="https://coinmarketcap.com/">Coinmarketcap</a></p>
            <p>updates every 5 minutes</p>
            <p>No database nothing is save</p>
            <p className="separateur">..........................................</p>
            <p>Donate</p>

            <button id="copy_BTC" type="button">BTC copy adress</button>
            <textarea id="to-copy_BTC" defaultValue="1PEtJcGnZgScDaRZjcd5R2QuSW4aPdmMWj"></textarea>
          
            <button id="copy_ETH" type="button">ETH copy adress</button>
            <textarea id="to-copy_ETH" defaultValue="0xfb9b1b5253cbf65241be09d42766dbf763a87bcb"></textarea>

            <button id="copy_LTC" type="button">LTC copy adress</button>
            <textarea id="to-copy_LTC" defaultValue="LPvhHVE8XzYZfQDRizHiBuiySqWFsBTo5T"></textarea>
          </div>
        </div>
        
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
