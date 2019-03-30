import React from 'react';
import {render} from 'react-dom';
import TypeWriter from 'react-typewriter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import Dext from '../reuse/Dext.jsx';
import MyTransition from '../reuse/MyTransition.jsx';
import './headerAnimations.css'

import { DanguinGlasses } from '../reuse/ImageLinks.jsx';

class Header extends React.Component {
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

        let color = '#2979FF';
        let title = "Dan Kim";
        let description = "Software Developer";
        let buttonText = "What I do";
        let link = '#Projects';
        let imageSrc = this.props.imageSrc;

        if (isMobile) {
            return (
            <MyTransition
                transitionClassName='headerComponent'>
                <div style={mainContainerMobile}>
                    <div style={textDivMobile}>
                
                        <Dext inputStyle={titleStyleMobile}>
                            {title}
                        </Dext>
                    <div style={dividerDesktop}/>
                        <Dext inputStyle={descriptionStyleMobile}>
                            {description}
                        </Dext>
                    </div>
                </div>
            </MyTransition>);
        } else {
            return (
                <MyTransition
                    transitionClassName='headerComponent'>
                    <div style={mainContainerDesktop}>
                    <div style={textDivDesktop}>
                    
                        <Dext inputStyle={titleStyleDesktop}>
                            {title}
                        </Dext>
                        <div style={dividerDesktop}/>
                        <Dext inputStyle={descriptionStyleDesktop}>
                            {description}
                        </Dext>
                        {/* <Link to={link} style={buttonStyleDesktop} className={'button'}>
                            <Dext>
                                {buttonText}
                            </Dext>
                        </Link> */}
                    </div>
                    {/* <div style={imageDivDesktop}>
                        <img src={imageSrc} style={imageStyleDesktop}/>
                    </div> */}
                </div>
            </MyTransition>
            );
        }

    }
}

// Desktop styles.
const mainContainerDesktop = {
    background: `${DanguinGlasses} no-repeat center center scroll`,
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    // backgroundColor: this.props.color
};

const textDivDesktop = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '4em'
}

const imageDivDesktop = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const titleStyleDesktop = {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#fff'
}
const descriptionStyleDesktop = {
    fontSize: '1.4em',
    color: '#fff',
    marginBottom: '3em'
}
const buttonStyleDesktop = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '3em',
    textDecoration: 'none',
    color: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff',
    paddingTop: '1em',
    paddingBottom: '1em',
    paddingLeft: '3em',
    paddingRight: '3em',
}
const imageStyleDesktop = {
    width: '50%',
    height: '50%'
}

const dividerDesktop = {
    width: '5em',
    height: '0.2em',
    backgroundColor: '#2979FF',
    marginTop: '2em',
    marginBottom: '2em'
}

// Mobile styles.
const mainContainerMobile = {
    background: 'url("./reactWebsite/src/client/app/images/bg.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: this.props.color,
    paddingTop: '1em',
    paddingBottom: '1em',
    transition: '500ms ease-in'
};
const imageDivMobile = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const textDivMobile = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}

const titleStyleMobile = {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#fff'
}
const descriptionStyleMobile = {
    fontSize: '1.4em',
    color: '#fff',
    marginTop: '1em',
    marginBottom: '3em'
}
const buttonStyleMobile = {
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
const imageStyleMobile = {
    width: '50%',
    height: '50%'
}

export default Header;
