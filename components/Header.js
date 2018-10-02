import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h2 className='Header-title'>{this.props.title}</h2>
      </div>
    )
  }
}

export default Header;
