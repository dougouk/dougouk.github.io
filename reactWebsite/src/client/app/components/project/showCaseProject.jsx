import React from 'react';
import {render} from 'react-dom';
import Dext from '../reuse/Dext.jsx';
import {Link} from 'react-router-dom';

class ShowCaseProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
        };

        this.handleWindowChange = this.handleWindowChange.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        window.addEventListener('resize', this.handleWindowChange);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('resize', this.handleWindowChange);
    }

    handleWindowChange() {
        this.setState({width: window.innerWidth});
    }

    // Sends index of project back to projectsPage, which will render
    // the project onto a card
    showProjectInfo() {
        this.props.moreInfo(this.props.project);
    }

    render() {
        let title = this.props.project.title;
        let description = this.props.project.shortDescription;
        let imageSrc = this.props.project.source;
        let buttonText = this.props.buttonText;
        let color = this.props.color;
        let link = this.props.link;


        const width = this.state.width;
        const isMobile = width <= 500;

        if (isMobile) {
            const mainContainer = {
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
                textAlign: 'center'
            }
            const descriptionStyle = {
                flex: 1,
                fontSize: '1.4em',
                color: this.props.textColor,
                marginTop: '1em',
                textAlign: 'center'
            }
            const buttonStyle = {
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '50%',
                textDecoration: 'none',
                color: this.props.textColor,
                borderStyle: 'solid',
                borderColor: this.props.textColor,
                textAlign: 'center',
                marginTop: '3em',
                marginBottom: '1em'
            }

            const textDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }

            const imageDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }

            const imageStyle = {
                width: '40%',
                height: '40%'
            }

            return (<div id="home" style={mainContainer}>
                <div style={imageDiv}>
                    <img src={imageSrc} style={imageStyle}/>
                </div>
                <div style={textDiv}>
                    <Dext inputStyle={titleStyle}>
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
            </div>);
        } else {
            const mainContainer = {
                margin: '0',
                padding: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                backgroundColor: this.props.color
            };

            const titleStyle = {
                fontSize: '4em',
                fontWeight: 'bold',
                color: this.props.textColor
            }
            const descriptionStyle = {
                fontSize: '1.4em',
                color: this.props.textColor,
                marginTop: '4em',
                marginBottom: '3em'
            }
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
            }

            const textDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: '4em',
                width: '100%'
            }

            const imageDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }

            const imageStyle = {
                width: '50%',
                height: '50%'
            }

            return (<div id="home" style={mainContainer}>
                <div style={textDiv}>
                    <Dext inputStyle={titleStyle}>
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
            </div>);
        }
    }
}


export default ShowCaseProject;
