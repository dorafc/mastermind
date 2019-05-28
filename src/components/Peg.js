import React, { Component } from 'react';
import './style/Peg.css';

class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    };
  }

  render() {
  	if (this.props.inPlay){
  		return (
	    	<div 
		      className="peg" 
		      style={{backgroundColor:this.state.colors[this.props.iterator % this.state.colors.length]}}
		      onClick={() => this.props.onClick()}
		    >
	      </div>
	    )
  	} else if (this.props.guessed){
  		return (
				<div 
		      className="peg" 
		      style={{backgroundColor:this.state.colors[this.props.iterator % this.state.colors.length]}}
		    >
		    </div>
  		)
  	} else {
  		return (
	  		<div 
			      className="peg" 
			      style={{backgroundColor:'grey'}}
			    >
		    </div>
	    )
  	}
  }
}

export default Peg;