import React from 'react';
import 'typeface-montserrat';
import 'typeface-merriweather';
import { rhythm } from '../utils/typography';
import PropTypes from 'prop-types';
import avatarPlaceholder from './avatar-placeholder.png';
import get from 'lodash/get';

class Author extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    profilePic: PropTypes.string
  }

  render() {
    const name = get(this.props, 'name') || 'Anonymous';
    const profilePic = get(this.props, 'profilePic') || avatarPlaceholder;
    return (
      <div>
        <div style={{}}>
          <img
            src={profilePic}
            alt={name}
            style={{
              verticalAlign:'middle',
              borderRadius: '100%',
              display: 'inline-block',
              width: rhythm(1),
              height: rhythm(1),
              marginBottom: 0
            }}
          />
          <div style={{
            marginLeft: rhythm(1 / 2),
            verticalAlign:'middle',
            display:'inline-block'
            }}>{name}</div>
        </div>
        
      </div>
    );
  }
}

export default Author;
