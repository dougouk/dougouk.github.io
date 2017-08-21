import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';
import ProjectTags from './projectTags.jsx';
import Dext from '../reuse/Dext.jsx';

class ProjectComponent extends React.Component {
  render () {
        let title = this.props.project.title;
        let date = this.props.project.date;
        let type = this.props.project.type;
        let description = this.props.project.description;
        let image = this.props.project.source;
        let githubLink = this.props.project.github ?
                            this.getLink(this.props.project.github, 'Github')
                            : null;
        let playStore = this.props.project.playStore ?
                            this.getGooglePlayLink(this.props.project.playStore, 'PlayStore')
                            : null;
        let devPost = this.props.project.devPost ?
                            this.getDevpostLink(this.props.project.devPost, 'DevPost')
                            : null;
        let website = this.props.project.website ?
                            this.getWebsiteLink(this.props.project.website, 'Website')
                            : null;
        let tags = this.props.project.tags;

        var awardsToDisplay;
        if(this.props.project.awards){
            awardsToDisplay = this.props.project.awards.map((award, index) =>
                                    <p style={awardStyle}>
                                        <Dext>
                                            {award}
                                        </Dext>
                                    </p>
                                );
        };

    return (
        <div class='header' style={container}>
            <Card overLevel={5} outLevel={1}>
                <div style={imageContainer}>
                    <img src={image} style={imageStyle}/>
                </div>
                <div style={textContainer}>
                    <h2 style={titleStyle}>{title}</h2>
                    <div style={notesContainer}>
                        <p style={dateStyle}>{date}</p>
                        <p style={noteStyle}>{type}</p>
                        {awardsToDisplay}
                    </div>
                    <p style={descriptionStyle}>{description}</p>
                    <div style={linkContainer}>
                        {githubLink}
                        {playStore}
                        {devPost}
                        {website}
                    </div>
                    <ProjectTags tags={tags}/>
                </div>
            </Card>
        </div>
        );
    }

    getLink(link, name){
        return (
            <a href={link} style={buttonStyle} target="_blank">
                <p style={linkStyle}>{name}</p>
            </a>);
    }

    getGooglePlayLink(link, name){
        return (
            <a href={link} style={buttonStyle} target="_blank">
                <img src="http://www.android.com/images/brand/android_app_on_play_large.png"/>
            </a>);
    }

    getDevpostLink(link, name){
        return (
            <a href={link} style={buttonStyle} target="_blank">
                <img src={require('../../images/devpost.png')}/>
            </a>);
    }

    getWebsiteLink(link, name){
        return (
            <a href={link} style={buttonStyle} target="_blank">
                <img src={require('../../images/website.png')}/>
            </a>);
    }

}

const container = {
    marginLeft: '1em',
    marginRight: '1em',
    marginTop: '3em',
    width: '30em'
};

const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#F5F5F5'
}

const textContainer = {
    padding: '2em'
}

const notesContainer = {
    display: 'flex',
    flexDirection: 'row'
}
const imageStyle = {
    maxHeight: '10em',
}
const titleStyle = {
    margin: '1em 1em 0em 0em',
    textAlign: 'left',
    fontSize: '3em',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif'
};

const dateStyle = {
    textAlign: 'left',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    marginRight: '0.4em',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center'
}

const noteStyle = {
    textAlign: 'left',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    marginRight: '0.2em',
    display: 'flex',
    alignItems: 'center'
};

const descriptionStyle = {
    textAlign: 'left',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    fontSize: '1.2em'
};

const awardStyle = {
    fontWeight: 'bold',
    backgroundColor: '#FFC107',
    color: '#42A5F5',
    padding: '0.5em',
    borderRadius: '1em',
    marginRight: '0.2em'
};

const buttonStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    marginRight: '1em'
};

const linkStyle = {
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontColor: '#1976D2',
    fontSize: '2em'
}
const linkContainer = {
    display: 'flex',
    flexDirection: 'row'
}
export default ProjectComponent;
