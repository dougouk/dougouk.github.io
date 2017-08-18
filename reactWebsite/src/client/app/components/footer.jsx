import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
  render () {
      let name = '(Dan) Dongoug Kim';
      let school = 'University of Waterloo';
      let location = 'Montreal, QC';
      let email = 'dougouk@gmail.com';
      let copyright = 'Copyright © Dongoug Kim 2017';
    return (
        <div class='footer' style={footerContainer}>
            <h4 style={nameStyle}>{name}</h4>
            <p style={schoolStyle}>{school}</p>
            <p style={locationStyle}>{location}</p>
            <a href='mailto:dououk@gmail.com' target="_blank">
                <p style={emailStyle}>{email}</p>
            </a>
            <p style={copyrightStyle}>{copyright}</p>
        </div>
    );
  }
}

const footerContainer = {
    marginTop: '2em',
    padding: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const nameStyle = {
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: '700',
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    margin: 0
};

const schoolStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    marginTop: '0.5em'
};

const locationStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    marginTop: '0.5em'
};

const emailStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    marginTop: '0.5em'
};

const copyrightStyle = {
    fontColor: '#777',
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    marginTop: '0.5em'
}

export default Footer;
