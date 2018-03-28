import React, { Component } from 'react';

class Header extends Component {

	render(){

	  return (
        <div>
	       <header className="App-header">
             <div className="logo"></div>  
             <h1 className="App-title">Crypto Currency Converter</h1>
           </header>
     
           <div className="photo_header"></div>
        </div>
	  );
	}
}

export default Header;
