import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Blogging extends Component {
  render() {
    return (
      <div>
        <h2>Blogging</h2>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Blogging;