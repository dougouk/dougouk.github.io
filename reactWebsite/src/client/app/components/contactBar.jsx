import React from 'react';
import {render} from 'react-dom';

class ContactBar extends React.Component {
  render () {
      let contactLinks = [
          {
              name: 'Github',
              image: require('../images/github.png')
          },
          {
              name: 'LinkedIn',
              image: require('../images/linkedin.png')
          },
          {
              name: 'Email',
              image: require('../images/email.png')
          }
      ];

    return (
        <div class='header' style={container}>
            {this.getButton(contactLinks[0])}
            {this.getButton(contactLinks[1])}
            {this.getButton(contactLinks[2])}
        </div>
    );
  }

  getButton(props) {
      return (
          <a href='#' onClick={this.handleClick} style={buttonStyle}>
              <img src={props.image}/>
          </a>
      )
  }

  handleClick(e){
      e.preventDefault();
  }
}

const container = {
    backgroundColor: '#E3F2FD',
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
