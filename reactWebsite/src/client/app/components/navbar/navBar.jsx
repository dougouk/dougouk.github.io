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
              link: '#home',
              routerLink: '/'
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
              routerLink: '/projects'
          },
          {
              name: 'Contact',
              image: require('../../images/devpost.png'),
              link: '#footer',
              routerLink: '/'
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
      console.log(props.routerLink);
      return (
            <Link to={props.routerLink}>
                {/* <a href={props.link}
                    style={buttonStyle}
                    key={props.name}
                    onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}> */}
                <div style={buttonStyle}>
                    <Dext style={linkStyle}>
                        {props.name}
                    </Dext>
                </div>
                {/* </a> */}
            </Link>
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
    fontSize: '1.5em',
    textDecoration: 'none',
    marginRight: '10px'
};

const linkStyle = {
    flex: 1
};

export default NavBarComponent;
