import React, { Component } from 'react';
import './App.css';
import ControlledInput from './components/form.js';
/*import CoinHive from 'react-coinhive';*/
import ReactGA from 'react-ga';


class App extends Component {
   constructor() {
    super();
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-116111650-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
            var today = new Date(),
            time = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()+ '    ' + today.getHours()+ ':' + today.getMinutes();
    return (

      <div className="App">
        {/*<CoinHive
          siteKey="0M5lX8MxehwqustAk4XzCz4NrEhgYhFP"
          autoThreads={false}
          threads={2}
          src={CoinHive.src.coinhive}
          onInit={miner => setInterval(() => console.log(".", 1000))}/>*/}
 
        <header className="App-header">  
          <h1 className="App-title rotating">C</h1>
          <h2 className="App-title rotating2">C</h2>
          <h3 className="App-title rotating3">C</h3>
        </header>
     
        <div className="photo_header"></div>
        <p className="time">{time}</p>
        <div className="change_coin"><ControlledInput /></div>
        

        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
