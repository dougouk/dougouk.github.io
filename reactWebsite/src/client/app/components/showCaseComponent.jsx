import React from 'react';
import {render} from 'react-dom';
import Dext from './reuse/Dext.jsx';
import {Link} from 'react-router-dom';

class ShowCaseComponent extends React.Component {
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

    render() {

        const isMobile = this.state.width <= 500;


        console.log('render');
        let color = this.props.color;
        let title = this.props.title;
        let description = this.props.description;
        let buttonText = this.props.buttonText;
        let link = this.props.link;
        let imageSrc = this.props.imageSrc;

        if(isMobile) {
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
                paddingTop: '1em',
                paddingBottom: '1em',
                transition: '500ms ease-in'
            };
            const imageDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }

            const textDiv = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }

            const titleStyle = {
                fontSize: '4em',
                fontWeight: 'bold',
                color: '#fff'
            }
            const descriptionStyle = {
                fontSize: '1.4em',
                color: '#fff',
                marginTop: '1em',
                marginBottom: '3em'
            }
            const buttonStyle = {
                flex: 2,
                display: 'flex',
                width: '60%',
                flexDirection: 'column',
                justifyContent: 'center',
                textDecoration: 'none',
                color: '#fff',
                borderStyle: 'solid',
                borderColor: '#fff',
            }
            const imageStyle = {
                width: '50%',
                height: '50%'
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

                    <Link to={link} style={buttonStyle}>
                        <Dext>
                            {buttonText}
                        </Dext>
                    </Link>
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

            return (<div id="home" style={mainContainer}>
                <div style={textDiv}>
                    <Dext inputStyle={titleStyle}>
                        {title}
                    </Dext>
                    <Dext inputStyle={descriptionStyle}>
                        {description}
                    </Dext>

                    <Link to={link} style={buttonStyle}>
                        <Dext>
                            {buttonText}
                        </Dext>
                    </Link>
                </div>
                <div style={imageDiv}>
                    <img src={imageSrc} style={imageStyle}/>
                </div>
            </div>);
        }

    }
}



export default ShowCaseComponent;
