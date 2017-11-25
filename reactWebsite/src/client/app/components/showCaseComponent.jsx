import React from 'react';
import {render} from 'react-dom';
import Dext from './reuse/Dext.jsx';

class ShowCaseComponent extends React.Component {
  render () {
      let color = this.props.color;
      let title = this.props.title;
      let description = this.props.description;
      let buttonText = this.props.buttonText;
      let link = this.props.link;
      const mainContainer = {
          margin: '0',
          padding: '0',
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: this.props.color
      };

    return (
        <div id="home" style={mainContainer} >
            <div  style={textDiv}>
                <Dext inputStyle={titleStyle} >
                    {title}
                </Dext>
                <Dext inputStyle={descriptionStyle}>
                    {description}
                </Dext>

                <a href="#" style={buttonStyle}>
                    <Dext>
                        {buttonText}
                    </Dext>
                </a>
            </div>
            <div style={imageDiv}>

            </div>
        </div>
    );
  }
}

const textDiv = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const imageDiv = {
    flex: 1,
}
const titleStyle = {
    fontSize: '3rem',
    color: '#fff'
}
const descriptionStyle = {
    fontSize: '1.3rem',
    color: '#fff'
}
const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '5em',
    textDecoration: 'none',
    color: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff'
}

export default ShowCaseComponent;
