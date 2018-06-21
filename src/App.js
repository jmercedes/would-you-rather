import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Leaderboard from './components/Leaderboard'
import NewQuestion from './components/NewQuestion'
import Login from './components/Login'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import User from './components/User'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    const { usersIds, questionsIds } = this.props

    return (
      <div className="App">
        <Navbar />
        {/*
        <ul>
          { usersIds.map((user) => (<li key={user}><User id={user} /></li>)) }
        </ul>
        */}

        <Login users={ usersIds } />
        { /* <NewQuestion /> */ }
         <Leaderboard />
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Would you rather</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. Its built with default Bootstrap components and utilities with little customization.</p>
        </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <Card />
              <Card />
            </div>
          </div>

      </div>
    );
  }
}

function mapStateToProps({users, questions}) {
  return {
    usersIds: Object.keys(users),
    questionsIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(App);
