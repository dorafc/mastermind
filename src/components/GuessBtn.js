import React, { Component } from 'react';
import './style/GuessBtn.css';
// import Peg from './Peg';

class GuessBtn extends Component {
	constructor(props) {
  	super(props);
    this.state = {

    };
  }

  render() {
  	return (
  		<div className="guessBtn" onClick={() => this.props.onClick()}>Guess</div>
  	)
  }
}

export default GuessBtn;