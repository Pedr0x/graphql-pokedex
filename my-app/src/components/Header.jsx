import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="header-container-super">
        <div className="header-container">
          <div className="fw7 mr1">Swen 2.0</div>
          <Link to="/" className="header-link">
            new
          </Link>
          <div className="ml1">|</div>
          <Link to="/create" className="header-link">
            submit
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)