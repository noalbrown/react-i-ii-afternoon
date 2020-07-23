import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <button className="changePage">Previous</button>
        <button className="alterPage" id="alterLeft">Edit</button>
        <button className="alterPage">Delete</button>
        <button className="alterPage" id="alterRight">New</button>
        <button className="changePage">Next</button>
      </div>
    )
  }
}
export default Footer