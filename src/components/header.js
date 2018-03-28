import React, { Component } from 'react';
import logo from '../img/logo.png';
class Header extends Component {

	render(){

	  return (
        <div>
	       <header className="App-header">
             <div className="logo"> <img className="logo_img" src={logo} alt={"logo"}/> </div>  
             <h1 className="App-title">Crypto Currency Converter</h1>
           </header>
     
           <div className="photo_header"></div>
        </div>
	  );
	}
}

export default Header;
