import React, { Component } from 'react';
import './style/Game.css';
import Row from './Row';
import Answers from './Answers';

class Game extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	answer : this.compyGuess(),
    	playRow : 0,
      rows : Array(10).fill(0),
      // answers : Array(5).fill([0,0,0,0])
    };
  }

	// updateIterator(i){
 //  	const iterators = this.state.rows[this.state.playRow].slice()
 //  	iterators[i] = iterators[i]+1

 //  	const newRows = this.state.rows.map((x,index)=>(this.state.playRow===index) ? iterators : x)

 //  	this.setState({rows: newRows})
 //  }

  // renderPegs(rowCount){
  // 	const row = (rowCount >= 0) ? this.state.rows[rowCount] : this.state.guess
  // 	const inPlay = (this.state.playRow === rowCount)
  // 	const isGuessed = ((this.state.playRow > rowCount) || (rowCount === -1))

		// return (
  // 			row.map((iterator, index) => 
		//   		<li
		//   			key={"peg" + index + "row" + rowCount}
		//   		>
		// 	  		<Peg 
		// 					inPlay={inPlay}
		// 					guessed={isGuessed} 
		// 					iterator={iterator}
		// 					onClick = {() => this.updateIterator(index)}
		// 				/>
		// 			</li>
		//   	)
	 //  	)
  // }

  guessGame(){
  	const newPlayRow = this.state.playRow + 1
  	this.setState({playRow: newPlayRow})
  }


  renderRow(index){
  	return (
  		<Row
  			key = {"row"+index}
  			row = {index}
				inPlay = {this.state.playRow === index}
				guessed = {index < this.state.playRow}
				answer = {this.state.answer}
				clickBtn = {() => this.guessGame()}
			/>
  	)
  }

  compyGuess() {
  	let guessNew = [0,0,0,0]
  	guessNew = guessNew.map(() => Math.floor(Math.random() * 6))
  	return guessNew
  }

  renderAnswer(){
  	const answerPegs = this.renderPegs(-1)
  	return (
  		<div className="row">
  			{answerPegs}
  		</div>
  	)
  }

	render() {
		const rows = (this.state.rows.map((x,i) => this.renderRow(i))).reverse()

		return (
			<div className="board">
				<div className="compyAnswer row">
					<Answers 
						answer = {this.state.answer}
					/>
				</div>
				<div className="game">
					{rows}
				</div>
			</div>
		) 

	}
}

export default Game;