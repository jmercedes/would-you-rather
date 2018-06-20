import React, { Component } from 'react'

class NewQuestion extends Component {
  render(){
    return (
      <div>
        <form>
          <input className="form-control" type="text" placeholder="Question 1" />
          <input className="form-control" type="text" placeholder="Question 2" />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewQuestion
