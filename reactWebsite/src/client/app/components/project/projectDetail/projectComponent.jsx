import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';
import ProjectTags from './projectTags.jsx';
import Dext from '../../reuse/Dext.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

    getAwardsToDisplay() {
        if (this.props.project.awards) {
            return this.props.project.awards.map((award, index) => 
                <p  
                    key={index}
                    style={awardStyle}>
                    <Dext>
                        {award}
                    </Dext>
                </p>);
        } else {
            return null;
        }
    }

    renderProjectComponent(container,
                            innerContainer,
                            cardContainer,
                            awardsToDisplay,
                            escapeIcon) {
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
        return (
            <div className='projectComponentContainer' style={container} onClick={this.onClicked.bind(this)}>
                <TransitionGroup style={innerContainer}>
                    {/* <Card className='card' overLevel={5} outLevel={1} style={cardContainer}> */}
                    <Card className='card' overLevel={5} outLevel={1} style={cardContainer}>
                        <CSSTransition
                            key={title}
                            classNames='projectComponent'
                            timeout={700}
                            appear={true}>
                            <div className='cardDiv' style={cardFlexContainer}>
                                <img src={escapeIcon} style={escapeIconStyle} onClick={this.props.lessInfo}/>
                                {/* <div className='imageDiv' style={imageContainer}>
                                        <img src={image} style={imageStyle}/>
                                </div> */}
                                {/* <img src={image}/> */}
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
                        </CSSTransition>
                    </Card>
                </TransitionGroup>
            </div>);
    }

    render() {
        let escapeIcon = require('../../../images/cross.png');
        const isMobile = this.state.width <= 500;
        const awardsToDisplay = this.getAwardsToDisplay();

        if (isMobile) {
            const container = {
                position: 'fixed',
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                marginTop: '3em',
                width: '100%',
                height: '100%',
            }
            const cardContainer = {
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
            return (this.renderProjectComponent(container, innerContainer, cardContainer, awardsToDisplay, escapeIcon))
        } else {
            const container = {
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
            const cardContainer = {
                position: 'relative',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
            return (this.renderProjectComponent(container, innerContainer, cardContainer, awardsToDisplay, escapeIcon))
        }

        
    }

    getLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <p style={linkStyle}>{name}</p>
        </a>);
    }

    getGooglePlayLink(link, name) {
        return (<a href={link} style={buttonStyle} target="_blank">
            <img src="data:image/png;base64,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"/>
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
}

const cardFlexContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
}

const imageContainer = {
    // position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '20%'
}

const imageStyle = {
    alignSelf: 'center',
    // maxHeight: '2em',
    width: '100%',
    height: '100%',
    opacity: 1
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
