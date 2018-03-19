import React, { Component } from 'react';
import './App.css';
import ControlledInput from './components/form.js';



class App extends Component {
  render() {
            var today = new Date(),
            time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return (
      <div className="App">

        <header className="App-header">  
          <h1 className="App-title rotating">C</h1>
          <h2 className="App-title rotating2">C</h2>
          <h3 className="App-title rotating3">C</h3>
        </header>

        <div className="photo_header"></div>
          <div className="change_coin"><ControlledInput /></div>
        

        <footer className="App-footer"> {time} </footer>
      </div>
    );
  }
}

export default App;
