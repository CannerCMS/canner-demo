import React from 'react';
import 'typeface-montserrat';
import 'typeface-merriweather';
import { rhythm } from '../utils/typography';
import PropTypes from 'prop-types';

class Bio extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    profilePic: PropTypes.string,
    twitter: PropTypes.string
  }

  render() {
    const {name, profilePic, twitter} = this.props;
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <div style={{textAlign: 'center'}}>
          <img
            src={profilePic}
            alt={name}
            style={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: 'rgba(0, 0, 0, .1)',
              borderRadius: '100%',
              width: rhythm(2),
              marginBottom: 0,
              marginRight: rhythm(1 / 2),
              height: rhythm(2),
              padding: '.25rem'
            }}
          />
        </div>
        <p>
          Written by <strong>{name}</strong>, a pretty cool and nice guy.{' '}
          <a href={`https://twitter.com/${twitter}`}>
            You should follow him on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
