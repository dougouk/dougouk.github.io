import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';
import NavBarComponent from './navbar/navBar.jsx';

class Header extends React.Component {
  render () {
      let name = 'Dan Kim';
      let description = 'Android developer, open for part-time projects';
    return (
        <div style={mainContainer}>
            <NavBarComponent style={navBarStyle}/>
            <div style={headerContainer}>
                <h1 style={titleStyle}>{name}</h1>
                <h3 style={descriptionStyle}>{description}</h3>
            </div>
        </div>
    );
  }
}

const mainContainer = {
    // background: 'url("./reactWebsite/src/client/app/images/bg.jpg") no-repeat center center scroll',
    // backgroundSize: 'cover',
    backgroundColor: '#42A5F5',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
};

const headerContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '5em',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#FFF',
    margin: 0
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '3em',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#FFF',
    marginTop: '1em'
};

const navBarStyle = {
    marginTop: 'auto'
};

export default Header;
