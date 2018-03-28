import React, { Component } from 'react';


class Settings extends Component {

    save(){
         /*document.getElementById('stockage').style.backgroundColor = '#1289A7';*/
         // Méthode de stockage
         var inputNum = this.props.nums;
         var inputCoin = this.props.coins;

          if(typeof localStorage!=='undefined' && JSON) {
 
                var setup = {
                  values: {},
                  coins: {},
                };

                for (var i = 0; i <inputNum.length; i++) {
                   setup.coins['value'+i]=inputNum[i];
                   setup.values['coin'+i]=inputCoin[i];
                }
                 var values = JSON.stringify(setup);
              localStorage.setItem('set',values);
              /*alert("Mémorisation effectuée");*/
          } /*else alert("localStorage n'est pas supporté");*/
     }
	render(){

	    return (
	       <form>
            <input type="button" value="Save" id="stockage" onClick={ this.save.bind(this) }></input>
            <input type="button" value="Retrieve" id="lecture" onClick={ this.props.onclick }></input>
            <input type="button" value="Reset" id="reset" onClick={ this.props.reset }></input>
        </form>
	    );
	}
}
export default Settings;


