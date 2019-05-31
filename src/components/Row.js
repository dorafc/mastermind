import React, { Component } from 'react';
import './style/Row.css';
import Peg from './Peg';
import ResponsePeg from './ResponsePeg';

class Row extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      iterators : Array(4).fill(0),
      answers : Array(4).fill(0),
    };
  }

  updateIterator(i){
  	const iterators = this.state.iterators.slice()
  	iterators[i] = iterators[i]+1

  	this.setState({iterators: iterators})
  }

  responsePegs(){
  	if (this.props.guessed){
  		return (this.props.answers.map((answer, index) =>
	  		<ResponsePeg 
	  			key = {index}
					iterator = {answer}
				/>
			))
  	}
  }

  renderPegs(){
  	if (this.props.inPlay){
  		return (
  			this.state.iterators.map((iterator, index) => 
		  		<li
		  			key={index}
		  		>
			  		<Peg 
							inPlay={this.props.inPlay}
							guessed={this.props.guessed} 
							iterator={iterator}
							onClick = {() => this.updateIterator(index)}
						/>
					</li>
		  	)
	  	)
  	} else {
	  	return (
	  		this.state.iterators.map((iterator, index) => 
		  		<li
		  			key={index}
		  		>
			  		<Peg 
							inPlay={this.props.inPlay}
							guessed={this.props.guessed} 
							iterator={iterator}
						/>
					</li>
		  	)
		  )
		}
  }

  render() {
  	const pegs = this.renderPegs()
	  // const answers = this.responsePegs()
    
	  const rowClass = (this.props.guessed ? "row guessed" : "row")
		return(
  		<div 
  			className={rowClass}
  		>
        {pegs}
  		</div>
  	)
  }
}
export default Row;