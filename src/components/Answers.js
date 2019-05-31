import React, { Component } from 'react';
import Peg from './Peg';

class Answers extends Component {
	constructor(props) {
  	super(props);
    this.state = {

    };
  }

  render() {
  	return (
  		this.props.answer.map((iterator, index) => 
	  		<li
	  			key={index}
	  		>
		  		<Peg 
						inPlay={false}
						guessed={true} 
						iterator={iterator}
						onClick = {() => this.updateIterator(index)}
					/>
				</li>
			)
  	)
  }
}

export default Answers;