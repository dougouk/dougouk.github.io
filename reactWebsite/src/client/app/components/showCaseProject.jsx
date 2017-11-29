import React from 'react';
import {render} from 'react-dom';
import Dext from './reuse/Dext.jsx';
import { Link } from 'react-router-dom';

class ShowCaseProject extends React.Component {
    constructor(props) {
        super(props);
    }

    // Sends index of project back to projectsPage, which will render
    // the project onto a card
    showProjectInfo() {
        this.props.moreInfo(this.props.project);
    }

    render () {
        let title = this.props.project.title;
        let description = this.props.project.description;
        let imageSrc = this.props.project.source;
        let buttonText = this.props.buttonText;
        let color = this.props.color;
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

                <a href='javascript:void(0)' onClick={this.showProjectInfo.bind(this)} style={buttonStyle}>
                    <Dext>
                        {buttonText}
                    </Dext>
                </a>
            </div>
            <div style={imageDiv}>
                <img src={imageSrc} style={imageStyle}/>
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
    alignItems: 'flex-start',
    paddingLeft: '4em'
}

const imageDiv = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const titleStyle = {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#fff'
}
const descriptionStyle = {
    fontSize: '1.4em',
    color: '#fff',
    marginTop: '4em',
    marginBottom: '3em'
}
const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '5em',
    textDecoration: 'none',
    color: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff',
    paddingTop: '1em',
    paddingBottom: '1em',
    paddingLeft: '3em',
    paddingRight: '3em'
}
const imageStyle = {
    width: '50%',
    height: '50%'
}

export default ShowCaseProject;
