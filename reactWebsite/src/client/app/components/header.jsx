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
    background: 'url("./app/images/bg.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '4em',
    margin: 0
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    marginTop: '1em'
};

export default Header;
