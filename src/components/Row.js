import React, { Component } from 'react';
import './style/Row.css';
import Peg from './Peg';
import ResponsePeg from './ResponsePeg';
import GuessBtn from './GuessBtn';

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

  checkPeg(iterator, index){
    let answer = 0;
    if(this.props.answer[index] === (iterator % 6)){
      answer = 1;
    } else if (this.props.answer.includes(iterator % 6)){
      answer = 2
    }
    return (
      <ResponsePeg 
        key = {"peg"+index}
        iterator = {answer}
      />
    )
  }

  responsePegs(){
  	if (this.props.guessed) {
      const answers = this.state.iterators.map((answer, index) =>
        this.checkPeg(answer, index)
      )
  		return (
        <div className="answers">
          {answers}
        </div>
      )
  	} else if (this.props.inPlay){
      return (
        <GuessBtn 
          onClick = {() => this.props.clickBtn()}
        />
      )
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
	  const guess = this.responsePegs()

	  const rowClass = (this.props.guessed ? "row guessed" : "row")
		return(
  		<div 
  			className={rowClass}
  		>
        {pegs}
        {guess}

  		</div>
  	)
  }
}
export default Row;