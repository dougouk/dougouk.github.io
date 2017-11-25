import React from 'react';
import {render} from 'react-dom';

class ContactBar extends React.Component {
  render () {
      let contactLinks = [
          {
              name: 'Github',
              image: require('../images/github_black.png'),
              link: 'https://github.com/dougouk'
          },
          {
              name: 'LinkedIn',
              image: require('../images/linkedin_black.png'),
              link: 'https://www.linkedin.com/in/dougouk/'
          },
          {
              name: 'Email',
              image: require('../images/email.png'),
              link: 'mailto:dououk@gmail.com',
          },
          {
              name: 'Devpost',
              image: require('../images/devpost.png'),
              link: 'https://devpost.com/dougouk?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
          }
      ];

    return (
        <div class='header' style={container}>
            {contactLinks.map((contact, index) =>
                this.getButton(contact)
            )}
        </div>
    );
  }

  getButton(props) {
      return (
          <a href={props.link} style={buttonStyle} target="_blank">
              <img src={props.image}/>
          </a>
      )
  }

  handleClick(e){
      e.preventDefault();
  }
}

const container = {
    backgroundColor: '#FFF',
    width: '100%',
    height: '5em',
    display: 'flex',
    justifyContent: 'space-around',
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90%'
};

const linkStyle = {
    flex: 1
};

export default ContactBar;
