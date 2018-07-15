import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';
import ProjectTags from './projectTags.jsx';
import Dext from '../../reuse/Dext.jsx';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
        };

        this.handleWindowChange = this.handleWindowChange.bind(this);
    }

    componentWillMount() {
        console.log('project component componentWillMount');
        window.addEventListener('resize', this.handleWindowChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowChange);
    }

    handleWindowChange() {
        this.setState({width: window.innerWidth});
    }

    onClicked(event) {
        console.log(event.target.className)

        const divClassName = event.target.className;
        if (divClassName == 'projectComponentContainer' ||
            divClassName == 'projectComponentInnerContainer') {
                this.props.lessInfo()
            }
    }

    render() {
        let title = this.props.project.title;
        let date = this.props.project.date;
        let type = this.props.project.type;
        let description = this.props.project.description;
        let image = this.props.project.source;
        let githubLink = this.props.project.github
            ? this.getLink(this.props.project.github, 'Github')
            : null;
        let playStore = this.props.project.playStore
            ? this.getGooglePlayLink(this.props.project.playStore, 'PlayStore')
            : null;
        let devPost = this.props.project.devPost
            ? this.getDevpostLink(this.props.project.devPost, 'DevPost')
            : null;
        let website = this.props.project.website
            ? this.getWebsiteLink(this.props.project.website, 'Website')
            : null;
        let tags = this.props.project.tags;

        var awardsToDisplay;
        if (this.props.project.awards) {
            awardsToDisplay = this.props.project.awards.map((award, index) => <p style={awardStyle}>
                <Dext>
                    {award}
                </Dext>
            </p>);
        };

        let escapeIcon = require('../../../images/cross.png');

        const isMobile = this.state.width <= 500;
        var container;
        var cardContainer;

        if (isMobile) {
            container = {
                position: 'fixed',
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                marginTop: '3em',
                width: '100%',
                height: '100%',
            }
            cardContainer = {
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        } else {
            container = {
                position: 'fixed',
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                marginLeft: '1em',
                marginRight: '1em',
                marginTop: '3em',
                width: '100%',
                height: '100%',
            }
            cardContainer = {
                position: 'relative',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        }

        return (<div className='projectComponentContainer' style={container} onClick={this.onClicked.bind(this)}>
            <div className='projectComponentInnerContainer' style={innerContainer}>
                {/* <Card className='card' overLevel={5} outLevel={1} style={cardContainer}> */}
                <Card className='card' overLevel={5} outLevel={1} style={cardContainer}>
                    <div className='cardDiv' style={cardFlexContainer}>
                        <img src={escapeIcon} style={escapeIconStyle} onClick={this.props.lessInfo}/>
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
                    </div>
                    {/* <div style={imageContainer}>
                        <img src={image} style={imageStyle}/>
                    </div> */}
                </Card>
            </div>
        </div>);
    }

    getLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <p style={linkStyle}>{name}</p>
        </a>);
    }

    getGooglePlayLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <img src="http://www.android.com/images/brand/android_app_on_play_large.png"/>
        </a>);
    }

    getDevpostLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <img src={require('../../../images/devpost.png')}/>
        </a>);
    }

    getWebsiteLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <img src={require('../../../images/website.png')}/>
        </a>);
    }

}

const innerContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};
const cardFlexContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
}

const imageContainer = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
}
const imageStyle = {
    alignSelf: 'center',
    maxHeight: '10em',
    width: '50%',
    height: '50%',
    opacity: 0.2
}

const escapeIconStyle = {
    position: 'absolute',
    right: '5%',
    top: '2%',
    width: '24px'
}

const textContainer = {
    paddingLeft: '2em',
    paddingRight: '2em'
}

const notesContainer = {
    display: 'flex',
    flexDirection: 'row'
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
