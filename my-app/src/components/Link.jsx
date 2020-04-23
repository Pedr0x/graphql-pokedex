import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div className="link-item">
        <div className="link-item-description">
          {this.props.link.description} </div>
           <div className="link-item-url">  ({this.props.link.url})</div>
        
      </div>
    )
  }
}

export default Link