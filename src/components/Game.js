import React from 'react';
import './style/Game.css';
import Row from './Row';

function Game() {
	return (
		<div className="game">
			<Row
				inPlay={false}
				guessed={false}
				iterators = {[0,0,0,0]}
			/>
			<Row
				inPlay={false}
				guessed={false}
				iterators = {[0,0,0,0]}
			/>
			<Row
				inPlay={true}
				guessed={false}
				iterators = {[0,0,0,0]}
			/>
			<Row
				inPlay={false}
				guessed={true}
				iterators = {[0,1,2,3]}
			/>
			<Row
				inPlay={false}
				guessed={true}
				iterators = {[5,2,3,4]}
			/>
		</div>
	)
}

export default Game;

// create row
// create board?