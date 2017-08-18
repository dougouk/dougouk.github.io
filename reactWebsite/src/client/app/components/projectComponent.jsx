import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';

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
                            this.getLink(this.props.project.devPost, 'DevPost')
                            : null;
        let website = this.props.project.website ?
                            this.getLink(this.props.project.website, 'Website')
                            : null;
    return (
        <div class='header' style={container}>
            <Card overLevel={5} outLevel={1}>
                <div style={imageContainer}>
                    <img src={image} style={imageStyle}/>
                </div>
                <h2 style={titleStyle}>{title}</h2>
                <p style={noteStyle}>{date}  {type}</p>
                <p style={descriptionStyle}>{description}</p>
                <div style={linkContainer}>
                    {githubLink}
                    {playStore}
                    {devPost}
                    {website}
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

}

const container = {
    margin: 'auto',
    marginTop: '3em',
    width: '30em'
};

const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#F5F5F5'
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

const noteStyle = {
    textAlign: 'left',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif'
};

const descriptionStyle = {
    textAlign: 'left',
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif'
};

const buttonStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    marginLeft: '1em'
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
