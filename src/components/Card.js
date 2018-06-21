import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {

	render(){

		console.log(this.props.question)

	return(
			<div className="card mb-4 box-shadow">
	      <div className="card-body">
	        <h1 className="card-title pricing-card-title mb-5">...</h1>
	        <button type="button" className="btn btn-lg btn-block btn-primary">Select</button>
	      </div>
	    </div>
		)
		}
}

function mapStateToProps( { questions }, { id } ) {
	const question = questions[id]
	return {
		question: question
	}
}

export default connect(mapStateToProps)(Card)
