
import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
import NewInput from './new';



class ControlledInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	data:[{}],
    	currentChangeId:1,
    	changeValue : '$',
    	documents: [],
    	crypto:[],
    	cryptoNum:[],
    	total:0,
    };   
   
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  } 
   
  componentWillMount(){
 
     let Url= 'https://api.coinmarketcap.com/v1/ticker/?limit=0';
      fetch(Url,{mode:'cors', method:'GET'})
      .then( res => res.json())
      .then( data => { 
        this.setState({
         data : data
        });
      });
      let exc= 'https://api.fixer.io/latest?base=USD';
      fetch(exc,{mode:'cors', method:'GET'})
      .then( res => res.json())
      .then( rates => { 
        this.setState({
         EUR : rates.rates.EUR,
         GBP : rates.rates.GBP
        });
      });
     this.add();
     }
     selectChange = (change) => {this.setState({
     	currentChangeId: change.conv,
     	changeValue : change.symbol
     });}
  //inputs
  handleChange (event) {
        
     var key = event.target.id 
     var cryptoNum = this.state.cryptoNum   
     var number = event.target.value
     var crypto = this.state.crypto
	 cryptoNum.splice(key,1,number)
	 this.setState({ cryptoNum })
	 var total = 0;
     for (var i=0; i < cryptoNum.length; i++) {
     	total  += (crypto[i] * cryptoNum[i]);
     }
     if(cryptoNum.length === crypto.length){
        this.setState({ total: total });
     }
  }

  // select cryptomoney
  onChange ( index, currency) {
    var key = index
    var crypto = this.state.crypto
    var cryptoNum = this.state.cryptoNum 
    crypto.splice(key,1,currency.price_usd)
    this.setState({ crypto });
    var total = 0;
    for (var i=0; i < crypto.length; i++) {
      total  += (crypto[i] * cryptoNum[i]);
    }
     if(cryptoNum.length === crypto.length){
        this.setState({ total: total });
     }
  }

    add() {
    const documents = this.state.documents.concat(NewInput);
    this.setState({ documents });
  }

  remove() {
    const documents = this.state.documents.slice(0, -1);
    this.setState({ documents });
    this.state.crypto.pop()
    this.state.cryptoNum.pop()
    var total = 0;
    for (var i=0; i < this.state.crypto.length; i++) {
      total  += (this.state.crypto[i] * this.state.cryptoNum[i]);
    }
    this.setState({ total: total });
  }

    render () {
    	const options = [
        {name: 'GBP', value: 'GBP', conv: this.state.GBP, symbol:'£'},
        {name: 'EUR', value: 'EUR', conv: this.state.EUR, symbol:'€'},
        {name: 'USD', value: 'USD', conv: 1, symbol:'$'},
        ];
    	//add value to data for selectSearch
    	this.state.data.forEach((obj) => obj.value = obj.id);
        //selectSearch options
        var currencyOptions = this.state.data;
        if(this.state.crypto.length>0){
                var price = <p className="price"> = {
                	" "+this.state.total*this.state.currentChangeId+" "+this.state.changeValue}</p>;
            }else{
            	 price = <p className="price">={" "+0+" "+this.state.changeValue}</p>;
            }

        const documents = this.state.documents.map((Element, index) => {
        return <Element 
        key={ index } 
        index={ index }
        number={input => this.oneInput = input}
        $={this.state.crypto[index] * this.state.cryptoNum[index]*this.state.currentChangeId || 0}
        options={ currencyOptions } 
        change={ this.onChange.bind(this, index) } 
        inputChange={ this.handleChange.bind(this) }
        devise= {this.state.changeValue} />
      });

      if(this.state.documents.length>1){
     //var moins = <button onClick={ this.remove }><img src={minus} alt="minus"  /></button>;
     var moins = <button onClick={ this.remove }>-</button>;
   }

    return (
    	<div>
    	  <div className="header">
	    	  <SelectSearch
		        name="change"
		        value='USD' 
		        multiple={false}
		        options={options} 
		        search={false}
		        ref="ChangeValue"
		        onChange={this.selectChange} />
          <i className="far fa-angle-down"></i>
    	  </div>
        
        { documents }
        <div className="buttons">
        {/*  <button onClick={ this.add }><img src={plus} alt="plus"  /></button>*/}
        {moins}
        <button onClick={ this.add }>+</button>
            
        </div>
      
        <div className="resultat" >
          <div className="price_aff">{price}</div>
        </div>
      </div>
    );
  }

}
export default ControlledInput;