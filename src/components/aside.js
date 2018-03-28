import React, { Component } from 'react';
import Clipboard from './clipboard.js';
import Settings from './settings.js';

class Aside extends Component {
  
  triggrWrite(){
    this.props.onclick();
  }
  reset(){
    this.props.reset();
  }
	render(){
  
	    return (
	        <div className="aside">
        
            <p>Data from<br/> 
              <a className="aside_a" href="https://coinmarketcap.com/">
              <strong>Coinmarketcap</strong><br/></a>
              <em>updates every 5 minutes</em><br/>&<br/>
              <a className="aside_a" href="https://fixer.io/"><strong>Fixer</strong><br/></a>
              <em>updates every 60 seconds.</em>
            </p>
            <p></p>
            <p></p>
            <p><strong>No database</strong> nothing is save online.</p>
            <p>Save locally with localStorage:</p>

            <Settings
              coins={this.props.coins} 
              nums= {this.props.nums}
              onclick = {this.triggrWrite.bind(this)}
              reset = {this.reset.bind(this)}
             />
            
            <p className="separateur">..........................................</p>
            <p>Donate</p>

            <Clipboard />

          </div>
	    );
	}
 
}

export default Aside;
