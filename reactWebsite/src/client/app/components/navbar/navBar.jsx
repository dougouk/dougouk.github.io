import React from 'react';
import {render} from 'react-dom';
import Dext from '../reuse/Dext.jsx';

class NavBarComponent extends React.Component {
  render () {
      let contactLinks = [
          {
              name: 'Home',
              image: require('../../images/github.png'),
              link: '#'
          },
          {
              name: 'About',
              image: require('../../images/linkedin.png'),
              link: '#'
          },
          {
              name: 'Projects',
              image: require('../../images/email.png'),
              link: '#',
          },
          {
              name: 'Contact',
              image: require('../../images/devpost.png'),
              link: '#'
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
          <a href={props.link} style={buttonStyle} target="_blank">
              <Dext>
                  {props.name}
              </Dext>
          </a>
      )
  }

  handleClick(e){
      e.preventDefault();
  }
}

const container = {
    backgroundColor: '#0D47A1',
    width: '100%',
    height: '5em',
    display: 'flex',
    justifyContent: 'flex-end',
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
    marginRight: '10px'
};

const linkStyle = {
    flex: 1
};

export default NavBarComponent;
