import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';

class Header extends React.Component {
  render () {
      let name = '(Dan) Dongoug Kim';
      let description = 'Android developer, open for part-time projects';
    return (
        <div class='header' style={headerContainer}>
            <h1 style={titleStyle}>{name}</h1>
            <h3 style={descriptionStyle}>{description}</h3>

        </div>
    );
  }
}

const headerContainer = {
    backgroundColor: '#42A5F5',
    margin: '0',
    padding: '0'
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '4em',
    margin: 0
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '2em',
    margin: 0
};

export default Header;
