import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Instagram extends Component {
  // https://api.instagram.com/v1/tags/{tag-name}?access_token=ACCESS-TOKEN

  render() {
    return (
      <div>
        <h2>Instagram</h2>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Instagram;