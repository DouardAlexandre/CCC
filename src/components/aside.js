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
            <p></p>
            <p>Data from <a className="aside_a" href="https://coinmarketcap.com/">Coinmarketcap</a></p>
            <p>updates every 5 minutes</p>
            <p>&</p>
            <p><a className="aside_a" href="https://fixer.io/">Fixer</a></p>
            <p>updates every 60 seconds.</p>
            <p>No database nothing is save online.</p>
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
