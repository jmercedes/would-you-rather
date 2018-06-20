import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render(){
    console.log(this.props.user)

    return(
      <div>...3</div>
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
