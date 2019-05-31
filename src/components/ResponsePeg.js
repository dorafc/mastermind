import React, { Component } from 'react';
import './style/ResponsePeg.css';

class ResponsePeg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['none', 'black', '#eeeeee'],
    };
  }

  render() {
		return (
    	<div 
	      className="response_peg" 
	      style={{backgroundColor:this.state.colors[this.props.iterator % this.state.colors.length]}}
	    >
      </div>
    )
  }
}

export default ResponsePeg;