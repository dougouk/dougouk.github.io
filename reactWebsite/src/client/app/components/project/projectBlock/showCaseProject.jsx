import React from 'react';
import Dext from '../../reuse/Dext.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './showCaseProjectAnimations.css';

class ShowCaseProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
        };

        this.handleWindowChange = this.handleWindowChange.bind(this);
    }

    componentWillMount() {
        console.log('showcaseproject componentWillMount');
        window.addEventListener('resize', this.handleWindowChange);
    }


    componentWillUnmount() {
        console.log('showcaseproject componentWillUnmount');
        window.removeEventListener('resize', this.handleWindowChange);
    }

    handleWindowChange() {
        // Update window width.
        this.setState({width: window.innerWidth});
    }

    // Sends index of project back to projectsPage, which will render
    // the project onto a card
    showProjectInfo() {
        this.props.moreInfo(this.props.project);
    }

    renderShowCaseProject (mainContainerStyle, 
                            textDivStyle, 
                            title, 
                            titleStyle, 
                            description, 
                            descriptionStyle,
                            buttonText,
                            buttonStyle,
                            imageDiv,
                            logoSrc,
                            logoStyle,
                            demoDivStyle,
                            demoImage1,
                            demoImage1Style,
                            demoImage2,
                            demoImage2Style) {
        return (
            <div style={mainContainerStyle}>
                <div style={textDivStyle}>
                    <img src={logoSrc} style={logoStyle}/>
                    <TransitionGroup>
                        <CSSTransition
                            key={title}
                            classNames='showCaseProjectTitle'
                            timeout={700}
                            appear={true}>
                        <Dext inputStyle={titleStyle}>
                            {title}
                        </Dext>
                        </CSSTransition>
                    </TransitionGroup>

                    <TransitionGroup>
                        <CSSTransition
                            key={title}
                            classNames='showCaseProjectDescription'
                            timeout={1000}
                            appear={true}>
                            <Dext inputStyle={descriptionStyle}>
                                {description}
                            </Dext>
                        </CSSTransition>
                    </TransitionGroup>
                        
                    <TransitionGroup>
                        <CSSTransition
                            key={title}
                            classNames='showCaseProjectMoreInfoButton'
                            timeout={1100}
                            appear={true}>
                            <a href='javascript:void(0)' onClick={this.showProjectInfo.bind(this)} style={buttonStyle}>
                            <Dext>
                                {buttonText}
                            </Dext>
                        </a>
                        </CSSTransition>
                    </TransitionGroup>

                        
                </div>
                <TransitionGroup
                        style={demoDivStyle}>
                    <CSSTransition
                        key={demoImage1} 
                        classNames='componentImage'
                        timeout={800}
                        appear={true}>
                        <img src={demoImage1} style={demoImage1Style}/>
                    </CSSTransition>
                </TransitionGroup>
            </div>);
    }

    render() {
        let title = this.props.project.title;
        let description = this.props.project.shortDescription;
        let logoSrc = this.props.project.logo;
        let demoImage1 = this.props.project.demoImage1;
        let demoImage2 = this.props.project.demoImage2;
        let buttonText = this.props.buttonText;
        let color = this.props.color;
        let link = this.props.link;


        const width = this.state.width;
        const isMobile = width <= 500;

        if (isMobile) {
            return this.renderMobileView(title, description, buttonText, logoSrc, demoImage1, demoImage2);
        } else {
            return this.renderDesktopView(title, description, buttonText, logoSrc, demoImage1, demoImage2);
        }
    }

    renderDesktopView(title, description, buttonText, logoSrc, demoImage1, demoImage2) {
        const mainContainerStyle = {
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: this.props.color,
        };
        const titleStyle = {
            fontSize: '4em',
            fontWeight: 'bold',
            color: this.props.textColor
        };
        const descriptionStyle = {
            fontSize: '1.4em',
            color: this.props.textColor,
            marginTop: '2em',
            marginBottom: '3em',
            maxWidth: '80%'
        };
        const buttonStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '5em',
            textDecoration: 'none',
            color: this.props.textColor,
            borderStyle: 'solid',
            borderColor: this.props.textColor,
            paddingTop: '1em',
            paddingBottom: '1em',
            paddingLeft: '3em',
            paddingRight: '3em'
        };
        const textDivStyle = {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: '6em',
            width: '100%'
        };
        const imageDivStyle = {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        };
        const logoStyle = {
            width: '10em',
            height: 'auto',
            paddingBottom: '3em'
        };
        const demoDivStyle = {
            
        }
        const demoImage1Style = {
            width: 'auto',
            maxWidth: '600px',
            maxHeight: '80%',
            transform: 'translate(-1rem)'
        }
        const demoImage2Style = {
            width: '60%',
            height: '60%',
            transform: 'translate(1rem -1rem)'
        }
        return (this.renderShowCaseProject(mainContainerStyle, 
            textDivStyle, 
            title, 
            titleStyle, 
            description, 
            descriptionStyle, 
            buttonText, 
            buttonStyle, 
            imageDivStyle, 
            logoSrc, 
            logoStyle,
            imageDivStyle, // Use same style for demos.
            demoImage1,
            demoImage1Style,
            demoImage2,
            demoImage2Style));
    }

    renderMobileView(title, description, buttonText, logoSrc, demoImage1, demoImage2) {
        const mainContainerStyle = {
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.props.color,
            overflow: 'auto'
        };
        const titleStyle = {
            flex: 1,
            fontSize: '3em',
            fontWeight: 'bold',
            color: this.props.textColor,
            textAlign: 'center',
            marginTop: '1em'
        };
        const descriptionStyle = {
            flex: 1,
            fontSize: '1.4em',
            color: this.props.textColor,
            marginTop: '1em',
            textAlign: 'center',
            padding: '0 1em' // top right bottom left
        };
        const buttonStyle = {
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '10em',
            height: '3em',  
            textDecoration: 'none',
            color: this.props.textColor,
            borderStyle: 'solid',
            borderColor: this.props.textColor,
            textAlign: 'center',
            marginTop: '3em',
            marginBottom: '1em'
        };
        const textDiv = {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        };
        const imageDiv = {
            flex: 1, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        };
        const logoStyle = {
            width: '10em',
            height: 'auto',
        };
        const demoDivStyle = {
            width: 0, // Dont' show demo in mobile view.
            height: 0
        }
        const demoImage1Style = {
            width: '60%',
            height: '60%',
            transform: 'translate(-1rem)'
        }
        const demoImage2Style = {
            width: '60%',
            height: '60%',
            transform: 'translate(1rem -1rem)'
        }
        return (this.renderShowCaseProject(mainContainerStyle, 
            textDiv, 
            title, 
            titleStyle, 
            description, 
            descriptionStyle, 
            buttonText, 
            buttonStyle, 
            imageDiv, 
            logoSrc, 
            logoStyle,
            demoDivStyle,
            demoImage1,
            demoImage1Style,
            demoImage2,
            demoImage2Style));
    }
}


export default ShowCaseProject;
