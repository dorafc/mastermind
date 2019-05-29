import React, { Component } from 'react';
import './style/Game.css';
import Row from './Row';

class Game extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	guess : this.compyGuess(),
      rows : [[0,1,2,3],[5,2,3,4]],
      answers : [[0,1,2,2],[0,1,1,2]]
    };
  }

  renderRow(index){
  	const isPlay = (index === this.state.rows.length)
  	const isGuessed = (index < this.state.rows.length)
  	const iterator = (!isGuessed) ? [0,0,0,0] : this.state.rows[index]

  	return (
  		<Row
  			key = {index}
				inPlay = {isPlay}
				guessed = {isGuessed}
				iterators = {iterator}
				answers = {this.state.answers[index]}
			/>
  	)
  }

  compyGuess() {
  	let guessNew = [0,0,0,0]
  	guessNew = guessNew.map(() => Math.floor(Math.random() * 6))
  	return guessNew
  }

  renderAnswer(){
  	return (
  		<Row 
  			inPlay = {false}
  			guessed = {true}
  			iterators = {this.state.guess}
  			answers = {[]}
  		/>
  	)
  }

	render() {
		const numRows = 5;
		let rows = []
		for (let i = 0; i < numRows; i++){
			rows.push(this.renderRow(i))
		}

		rows = rows.reverse();

		return (
			<div className="board">
				<div className="compyAnswer">
					{this.renderAnswer()}
				</div>
				<div className="game">
					{rows}
				</div>
			</div>
		)
	}
}

export default Game;