import React, { Component } from 'react';
import './style/Row.css';
import Peg from './Peg';
import ResponsePeg from './ResponsePeg';

class Row extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      iterators : this.props.iterators,
      inPlay : this.props.inPlay,
      guessed : this.props.guessed,
      answers : this.props.answers,
    };
  }

  updateIterator(i){
  	const iterators = this.state.iterators.slice()
  	iterators[i] = iterators[i]+1

  	this.setState({iterators: iterators})
  }

  responsePegs(){
  	if (this.state.guessed){
  		return (this.state.answers.map((answer, index) =>
	  		<ResponsePeg 
	  			key = {index}
					iterator = {answer}
				/>
			))
  	}
  }

  renderPegs(){
  	if (this.state.inPlay){
  		return (
  			this.state.iterators.map((iterator, index) => 
		  		<li
		  			key={index}
		  		>
			  		<Peg 
							inPlay={this.state.inPlay}
							guessed={this.state.guessed} 
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
							inPlay={this.state.inPlay}
							guessed={this.state.guessed} 
							iterator={iterator}
						/>
					</li>
		  	)
		  )
		}
  }

  render() {
  	const pegs = this.renderPegs()
	  const answers = this.responsePegs()
	  const rowClass = (this.state.guessed ? "row guessed" : "row")
		return(
  		<div 
  			className={rowClass}
  		>
  			{pegs}
  			<div className="answers">
	  			{answers}
  			</div>
  		</div>
  	)
  }
}
export default Row;