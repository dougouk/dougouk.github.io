import React from 'react';
import {render} from 'react-dom';
import Dext from '../reuse/Dext.jsx';
import { Link } from 'react-router-dom';

class NavBarComponent extends React.Component {
  render () {
      let contactLinks = [
          {
              name: 'Home',
              image: require('../../images/github_white.png'),
              link: '#home'
          },
          // {
          //     name: 'About',
          //     image: require('../../images/linkedin_white.png'),
          //     link: '#'
          // },
          {
              name: 'Projects',
              image: require('../../images/email.png'),
              link: '#projects',
          },
          {
              name: 'Contact',
              image: require('../../images/devpost.png'),
              link: '#footer'
          }
      ];

    return (
        <div style={container}>
            {contactLinks.map((contact, index) =>
                this.getButton(contact)
            )};
        </div>
    );
  }

  getButton(props) {
      return (
          // <Link to={props.link}>
              <a href={props.link}
                  style={buttonStyle}
                  key={props.name}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}>
                  <Dext style={linkStyle}>
                      {props.name}
                  </Dext>
              </a>
          // </Link>
      )
  }

  handleClick(e){
      e.preventDefault();
  }
}

const container = {
    backgroundColor: '#0D47A1',
    width: '101%',
    height: '5em',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed'
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5em',
    marginRight: '10px'
};

const linkStyle = {
    flex: 1
};

export default NavBarComponent;
