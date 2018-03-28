import React, { Component } from 'react';


class Clipboard extends Component {

      componentDidMount(){

         var toCopy_BTC = document.getElementById( 'to-copy_BTC'),
         btnCopy_BTC = document.getElementById('copy_BTC');
         toCopy_BTC.style.opacity = 0;
         btnCopy_BTC.addEventListener( 'click', function(){
           toCopy_BTC.select();
           document.execCommand('copy');
           return false;
         });  

         var toCopy_ETH = document.getElementById( 'to-copy_ETH'),
         btnCopy_ETH = document.getElementById('copy_ETH');
         toCopy_ETH.style.opacity = 0;
         btnCopy_ETH.addEventListener( 'click', function(){
           toCopy_ETH.select();
           document.execCommand('copy');
           return false;
         });  

         var toCopy_LTC = document.getElementById( 'to-copy_LTC'),
         btnCopy_LTC = document.getElementById('copy_LTC');
         toCopy_LTC.style.opacity = 0;
         btnCopy_LTC.addEventListener( 'click', function(){
           toCopy_LTC.select();
           document.execCommand('copy');
           return false;
         });  
     
     }

	render(){

	    return (
	    <div>

            <button id="copy_BTC" type="button">BTC copy adress</button>
            <textarea id="to-copy_BTC" defaultValue="1PEtJcGnZgScDaRZjcd5R2QuSW4aPdmMWj"></textarea>
          
            <button id="copy_ETH" type="button">ETH copy adress</button>
            <textarea id="to-copy_ETH" defaultValue="0xfb9b1b5253cbf65241be09d42766dbf763a87bcb"></textarea>

            <button id="copy_LTC" type="button">LTC copy adress</button>
            <textarea id="to-copy_LTC" defaultValue="LPvhHVE8XzYZfQDRizHiBuiySqWFsBTo5T"></textarea>

        </div>
	    );
	}
}

export default Clipboard;
