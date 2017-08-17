import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
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
    backgroundColor: '#42A5F5'
};

const buttonStyle = {
    width: '4em',
    height: '2em'
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '2em'
};

export default Header;
