import React, { Component } from 'react';
import zero from '../img/0.png';
import un from '../img/1.png';
import deux from '../img/2.png';
import trois from '../img/3.png';
import quatre from '../img/4.png';
import cinq from '../img/5.png';
import six from '../img/6.png';
import sept from '../img/7.png';
import huit from '../img/8.png';
import neuf from '../img/9.png';
import point from '../img/point.png';

class Digits extends Component {

	onClick = (event) => {
    let digit = event.target.getAttribute('value');
    this.props.onSelectNumber(digit);
    }

	render(){
	    return (
	        <div>
                <img value={0} src={zero} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={1} src={un} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={2} src={deux} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={3} src={trois} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={4} src={quatre} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={5} src={cinq} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={6} src={six} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={7} src={sept} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={8} src={huit} onClick={this.onClick} className="digits" alt="digits"/>
                <img value={9} src={neuf} onClick={this.onClick} className="digits" alt="digits"/>
                <img value="." src={point} onClick={this.onClick} className="digits" alt="digits"/>
      
	        </div>
	    );
	  }
	 
	
}

export default Digits;



/*console.log(this.state.data);
	 var result = parseInt(this.state.number1) + parseInt(this.state.number2);
  return(
    <div>   
       <input type='number' value={this.state.number1}  onChange={this.handleChange.bind(this, 'number1')}/>
       <StatesField/>
       <br/>
       <br/>
       <input type='number' value={this.state.number2}  onChange={this.handleChange.bind(this, 'number2')}/>
       <p>={result}</p>
    </div>
    )*/