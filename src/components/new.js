import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
/*import $ from 'jquery'; */


class NewInput extends Component {
   
	render(){

	    return (
            <div className="firstLine" >
              {this.props.plus}
              <input 
                id={ this.props.index }
                pattern="[0-9.,]+" 
                min="0" 
                ref={this.props.number}
                onChange={this.props.inputChange} 
                type="number"
                defaultValue="1" />

                <SelectSearch
                  name={ this.props.id }
                  mode="input"
                  options={this.props.options}
                  multiple={false} 
                  onChange={this.props.change}
                />

              <div className="aff">{this.props.$+" "+this.props.devise}</div>

            </div>
	    );
	  }
}
export default NewInput;



