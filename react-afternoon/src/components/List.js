import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div className="List">
        <p id="Counter">Counter</p>
        <h1 id="Name">Name</h1>
        <div className="info">From:</div>
        <div className="info">Job Title:</div>
        <div className="info">Employer:</div>
        <div className="info" id="favMovies">Favorite Movies:
        <ul className="movieList">
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