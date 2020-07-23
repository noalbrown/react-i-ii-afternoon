import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div>
        <p>Counter</p>
        <h1>Name</h1>
        <div>From:</div>
        <div>Job Title:</div>
        <div>Employer:</div>
        <div>Favorite Movies:
        <ul>
            <li>Movie1</li>
            <li>Movie2</li>
            <li>Movie3</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default List