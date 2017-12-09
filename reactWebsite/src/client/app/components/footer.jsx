import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
  render () {
      let name = 'Dan Kim';
      let school = 'University of Waterloo';
      let location = 'Montreal, QC';
      let email = 'dougouk@gmail.com';
      let copyright = 'Copyright © Dongoug Kim 2017';

      let contactLinks = [
          {
              name: 'Github',
              image: require('../images/github_white.png'),
              link: 'https://github.com/dougouk'
          },
          {
              name: 'LinkedIn',
              image: require('../images/linkedin_white.png'),
              link: 'https://www.linkedin.com/in/dougouk/'
          }
      ];

    return (
        <div id='footer' style={footerContainer}>
            <h4 style={nameStyle}>{name}</h4>
            <p style={schoolStyle}>{school}</p>
            <p style={locationStyle}>{location}</p>
            <a href='mailto:dououk@gmail.com' target="_blank">
                <p style={emailStyle}>{email}</p>
            </a>
            <p>
                {contactLinks.map((contact, index) =>
                    <a key={index} href={contact.link} style={contactLinkStyle} target="_blank">
                        <img src={contact.image} width='32'/>
                    </a>
                )}
            </p>
            <p style={copyrightStyle}>{copyright}</p>
        </div>
    );
  }
}

const footerContainer = {
    paddingTop: '2em',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#448AFF'
};

const nameStyle = {
    textAlign: 'center',
    fontSize: '1.5em',
    color: '#FFF',
    fontWeight: '700',
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    margin: 0
};

const schoolStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#FFF',
    marginTop: '0.5em'
};

const locationStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#FFF',
    marginTop: '0.5em'
};

const emailStyle = {
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    textDecoration: 'none',
    color: '#FFF',
    marginTop: '0.5em'
};

const contactLinkStyle = {
    margin: '0.5em'
};

const copyrightStyle = {
    color: '#FFF',
    fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    marginTop: '0.5em'
}

export default Footer;
