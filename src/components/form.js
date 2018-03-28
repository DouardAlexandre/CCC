
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
      coin:[],
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
  selectChange = (change) => {
    this.setState({
      currentChangeId: change.conv,
      changeValue : change.symbol
    });
  }

  write(){

        if(typeof localStorage!=='undefined' && JSON) {

          var settings = JSON.parse(localStorage.getItem('set')); 
        
          const documents = [];
          if(Object.keys(settings).length!==0){ 
            for( var i=0 ; i < Object.keys(settings.coins).length; i++ ){
              documents[i] = NewInput;
            }
         
          this.setState({documents}, function () {
             
              for( var j=0 ; j < Object.keys(settings.coins).length; j++ ){

                  var value = settings.values['coin'+j] 
                  var obj = this.state.data.find(o => o.id === value);
                        
                  //inputs
                  var number = settings.coins['value'+j];
                  document.getElementById(j).value = number;
                  var cryptoNum = this.state.cryptoNum; 
                  cryptoNum.splice(j,1,number);

                  //selectsearch
                  var it = document.querySelectorAll("[data-value="+obj.id+"]")[j];
                  it.click();
              }
              var total = 0;
              for (var i=0; i < this.state.crypto.length; i++) {
                total  += (this.state.crypto[i] * this.state.cryptoNum[i]);
              }
               if(this.state.cryptoNum.length === this.state.crypto.length){
                  this.setState({ total: total });
               }
          });
        }
          /*alert("Lecture effectuée");*/

        } /*else alert("localStorage n'est pas supporté");*/
  }
  reset(){
    var crypto = []
    var cryptoNum = []
    var documents = []
    this.setState({ cryptoNum,crypto,documents }, function () {
      this.add();
    });
    var total = 0;
    this.setState({ total: total });   
  }

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
     this.props.passCoins(this.state.coin);
     this.props.passNums(this.state.cryptoNum);  
  }

  // select cryptomoney
  onChange ( index, currency) {

    var crypto = this.state.crypto
    var cryptoNum = this.state.cryptoNum 
    var coin = this.state.coin
    coin.splice(index,1,currency.value)
    crypto.splice(index,1,currency.price_usd)
  
    var total = 0;
    for (var i=0; i < crypto.length; i++) {
      total  += (crypto[i] * cryptoNum[i]);
    }
     if(cryptoNum.length === crypto.length){
        this.setState({ total: total });
     }
     this.props.passCoins(this.state.coin); 
     this.props.passNums(this.state.cryptoNum); 
  }

  add() {
    const documents = this.state.documents.concat(NewInput);
    this.setState({ documents });
    this.state.cryptoNum.push("1")
    this.state.crypto.push("0")
  }

  remove() {
    if(this.state.documents.length===2){
        var btn = document.getElementById("btn_pl");
        btn.style.marginRight= "4px";
        btn.style.marginLeft= "36px";
    }

    const documents = this.state.documents.slice(0, -1);
    this.setState({ documents });
    this.state.coin.pop()
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
        var price = <p className="price"> 
        { " "+this.state.total*this.state.currentChangeId+" "+this.state.changeValue}</p>;
      }else{
         price = <p className="price">{" "+0+" "+this.state.changeValue}</p>;
      }

        var addition =  <div className="addition">+</div> ;

        const documents = this.state.documents.map((Element, index) => {
          return <Element 

          key={ index } 
          id= {'input'+index}
          index={ index }
          number={input => this.oneInput = input}
          $={this.state.crypto[index] * this.state.cryptoNum[index]*this.state.currentChangeId || 0}
          options={ currencyOptions } 
          change={ this.onChange.bind(this, index) } 
          inputChange={ this.handleChange.bind(this) }
          devise= {this.state.changeValue}
          plus={addition} />
        });
      
      if(this.state.documents.length>1){
        var moins = <button id="btn_mo" onClick={ this.remove }>-</button>;
        var btn = document.getElementById("btn_pl");
        btn.style.marginRight= "40px";
        btn.style.marginLeft= "0px";
      }

      if(this.state.documents.length<2){
        var add =  <p className="newCrypto">Add</p>;
      }

   
    return (
    	<div className="find">

    	  <div className="header">

	    	  <SelectSearch
		        name="change"
		        value='USD' 
		        multiple={false}
		        options={options} 
		        search={false}
		        onChange={this.selectChange} />

    	  </div>
        
        { documents }
    
        <div className="sum">
          {add}
          {moins}
          <button id="btn_pl" onClick={ this.add }>+</button>
        </div>

        <div className="rez">
          <div className="price_aff">{price}</div>
        </div>

      </div>
    );
  }

}
export default ControlledInput;