import React, { Component } from 'react';
import Header from './Header';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';
import {
  volunteer0,
  volunteer1,
  volunteer2,
  volunteer3,
  volunteer4,
  volunteer5,
  volunteer6,
  volunteer7,
  volunteer8,
  volunteer9
} from '../assets';

const volunteerAssets = [
  volunteer0,
  volunteer1,
  volunteer2,
  volunteer3,
  volunteer4,
  volunteer5,
  volunteer6,
  volunteer7,
  volunteer8,
  volunteer9
];

class Instagram extends Component {
  constructor() {
    super();

    this.state = {
      animatedId: null
    }
  }

  // https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=1400541818.67b0f9c.0d106851697c4e9b9a4874fea57d9080

  // componentDidMount() {
  //   const { location: { href } } = window;

  //   if (!href.includes('code=')) {
  //     window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=67b0f9c3fafc4a3eac74d6431ded5a54&redirect_uri=http://localhost:1234/instagram&response_type=code';
  //   } else {
  //     const code = href.split('?code=')[1];

  //     // fetch('https://api.instagram.com/oauth/access_token', {
  //     //   method: 'POST',
  //     //   body: formData
  //     //   // body: JSON.stringify({
  //     //   //   client_id: '67b0f9c3fafc4a3eac74d6431ded5a54',
  //     //   //   client_secret: '3b6569e3c61f408786949cfc2db81222',
  //     //   //   grant_type: 'authorization_code',
  //     //   //   code: this.state.code,
  //     //   // })
  //     // }).then(response => console.log('response', response));

  //     fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=1400541818.67b0f9c.0d106851697c4e9b9a4874fea57d9080')
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log('json', json);
  //       });

  //     // 1400541818.67b0f9c.0d106851697c4e9b9a4874fea57d9080
  //   }
  // }

  render() {
    console.log('this.state', this.state);

    return (
      <div className='center-page'>
        <Header title='Photo Library'></Header>
        <Link to='/' className='Home-link'>Home</Link>
        <hr />
        <br />
        <div>
          {
            volunteerAssets.map((asset, index) => {
              const id = index;
              // TODO: Turn google.com into an actual blog link
              return (
                <div
                  key={id}
                  className='volunteerAsset'
                  onMouseEnter={() => this.setState({animatedId: id})}
                  // onMouseLeave={() => this.setState({animatedId: null})}
                >
                  <a className='volunteerPic'>
                    <img
                      src={asset}
                      className='volunteerImg'
                    />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Instagram;

// className={this.state.animatedId === id ? 'volunteerImg darkenImg' : 'volunteerImg'}
// <p classname='volunteerDesc'>{this.state.animatedId === id ? 'Check it' : ''}</p>
// <iframe src='https://www.instagram.com/explore/tags/volunteering/' name='instagram'></iframe>
// <a href='https://www.instagram.com/explore/tags/volunteering/'>Volunteering on Insta</a>