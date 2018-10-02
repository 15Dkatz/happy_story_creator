import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { volunteer7 } from '../assets';

class Home extends Component {
  render() {
    return (
      <div className='center-page'>
        <h2>Happy Story Creator</h2>
        <div><Link to='/instagram'>Photo Library</Link></div>
        <div><Link to='/blogging'>Blogging</Link></div>
      </div>
    );
  }
}

export default Home;
