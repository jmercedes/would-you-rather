import React, { Component } from 'react'
import '../assets/signin.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class Login extends Component {
  render(){

    //
    console.log('user', this.props.users)

    return(
      <div className="text-center signin-body">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Select user</h1>

          <div className="form-group">
           <label>Example select</label>
           <select className="form-control" id="exampleFormControlSelect1">
             <option>1</option>
             <option>2</option>
           </select>
         </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    )
  }
}

function mapStateToProps( { users } ) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(Login)
