import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Altruism and Avocados</h2>
        <div><Link to='/instagram'>Instagram</Link></div>
        <div><Link to='/blogging'>Blogging</Link></div>
      </div>
    );
  }
}

export default Home;
