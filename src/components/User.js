import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render(){

    const { name, answers, questions } = this.props.user

    return(
      <div>{name}, {answers.length || 0}, {questions.length} </div>
    )
  }
}


function mapStateToProps( { users, questions }, { id } ){
  const user = users[id]
  return {
    user: user
  }

}
export default connect(mapStateToProps)(User)
