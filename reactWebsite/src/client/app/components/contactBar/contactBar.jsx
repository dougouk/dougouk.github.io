import React from 'react';
import {render} from 'react-dom';

class ContactBar extends React.Component {
  render () {
      let github = {
          name: 'Github',
          image: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
      };
    return (
        <div class='header' style={container}>
            {this.getButton({github})}
        </div>
    );
  }

  getButton(props) {
      console.log(props);
      return (
          <a href='#' onClick={this.handleClick}>
              <button style={buttonStyle}>
                  {props.name}
              </button>
          </a>
      )
  }

  handleClick(e){
      e.preventDefault();
      console.log('link was clicked');
  }
}



const container = {
    backgroundColor: '#E3F2FD',
    height: '4em'
};

const buttonStyle = {
    justifyContent: 'center',
    width: '4em',
    height: '3em'
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '2em'
};

export default ContactBar;
