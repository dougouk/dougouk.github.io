import React from 'react';
import {render} from 'react-dom';
import Dext from '../reuse/Dext.jsx';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class NavBarComponent extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            shouldHideNavBar: false,
            shouldExpandMobileMenu: false,
            width: window.innerWidth
        };
        this.hideBar = this.hideBar.bind(this);
        this.handleWindowChange = this.handleWindowChange.bind(this);
    }

    componentWillMount() {
        console.log('Navbar componentWillMount');
        window.addEventListener('resize', this.handleWindowChange);
    }

    handleWindowChange() {
        // Update window width.
        this.setState({width: window.innerWidth});
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
        console.log('Navbar componentWillUnmount');
        window.removeEventListener('resize', this.handleWindowChange);
        window.removeEventListener('scroll', this.hideBar);
    }

    hideBar(){
        // As you scroll down, scrollY will be higher
        let hidden = this.state.shouldHideNavBar
        if (window.scrollY > this.prev && !hidden) {
            // Scrolling down, and currently showing navbar.
            // Hide the navbar.
            this.setState({shouldHideNavBar: true});
            // TODO animation
        } else if (window.scrollY < this.prev && hidden) {
            // Scrolling up, and navbar is hidden.
            // Show the navbar.
            this.show();
        }

        this.prev = window.scrollY;
    }

    show() {
        // TODO animation
        this.setState({shouldHideNavBar: false});
    }

    mobileMenuButtonOnClick() {
        const newState = !this.state.shouldExpandMobileMenu;
        this.setState({ shouldExpandMobileMenu: newState});
    }

    getMenuButtons() {
        const contactLinks = [
            {
                name: 'Home',
                image: require('../../images/github_white.png'),
                link: '#home',
                routerLink: '/'
            },
          // {
          //     name: 'About',
          //     image: require('../../images/linkedin_white.png'),
          //     link: '#'
          // },
            {
                name: 'Projects',
                image: require('../../images/email.png'),
                link: '#projects',
                routerLink: '/projectsPage'
            },
            // {
            //     name: 'Contact',
            //     image: require('../../images/devpost.png'),
            //     link: '#footer',
            //     routerLink: '/'
            // }
            {
                name: 'Resume',
                image: null,
                link: './reactWebsite/src/client/app/resources/resume.pdf',
            }
        ];

        const items = contactLinks.map((contact, index) =>
            {
                return this.getButton(contact, index);  
            }
        );

        return items;
    }

    render () {
        const width = this.state.width;
        const isMobile = width <= 500;
        if (isMobile) {
            const menuButtons = this.getMenuButtons();
            return this.renderMobileMenu(menuButtons);
        } else {
            const menuButtons = this.getMenuButtons();
            return this.renderDesktopMenu(menuButtons);
        }
      }
      
    renderDesktopMenu(menuButtons) {
        if (!this.state.shouldHideNavBar) {
            return (
                    <TransitionGroup>
                        <CSSTransition
                            key={'navBar'}
                            classNames='navBar'
                            timeout={300}
                            appear={true}>
                            <div style={container}>
                                {menuButtons};
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
            );
        } else {
            return (<div></div>);
        }
    }

    renderMobileMenu(menuButtons) {
        if (!this.state.shouldHideNavBar) {
            if (!this.state.shouldExpandMobileMenu) {
                return (
                    <div style={mobileMenuStyle}>
                        <img style={mobileMenuLogoStyle} src={menuImage} onClick={this.mobileMenuButtonOnClick.bind(this)}/>
                    </div>
                );
            } else {
                return (
                    <div style={mobileMenuStyle}>
                        <img style={mobileMenuLogoStyle} src={crossImage} onClick={this.mobileMenuButtonOnClick.bind(this)}/>
                        <TransitionGroup style={mobileExpandedMenuContainerStyle}>
                            <CSSTransition
                                key={'navBar'}
                                classNames='navBar'
                                timeout={300}
                                appear={true}>
                                <div>
                                    {menuButtons}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                );
            }
        } else {
            return (<div></div>);
        }
    }

    getButton(props, index) {
        const width = this.state.width;
        const isMobile = width <= 500;
        var menuStyle;
        if (isMobile) {
            menuStyle = buttonStyleMobile;
        } else {
            menuStyle = buttonStyle;
        }
        
        if (props.routerLink) {
            // Button links to a webpage.
                return (
                    <Link to={props.routerLink}
                        style={menuStyle}
                        key={index}>
                        <div style={menuStyle}>
                            <Dext style={linkStyle}>
                                {props.name}
                            </Dext>
                        </div>
                    </Link>
            )
        } else {
            // Button links to a file.
                return (
                    <a href={props.link}
                        target='_blank'
                        style={menuStyle}
                        key={index}>
                        <div style={menuStyle}>
                            <Dext style={linkStyle}>
                                {props.name}
                            </Dext>
                        </div>
                    </a>
        )       
    }
      
  }

  handleClick(e){
      e.preventDefault();
  }
}

const menuImage = require('../../images/buttons/menu/menu.png');
const crossImage = require('../../images/buttons/menu/cross.png');

const container = {
    backgroundColor: '#2979FF',
    width: '101%',
    height: '5em',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    zIndex: 1
};

const mobileMenuStyle = {
    backgroundColor: '#2979FF',
    width: '101%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    transition: '.25s ease-in-out,background-color .3s ease-out'
}

const mobileExpandedMenuContainerStyle = {
    backgroundColor: '#2979FF',
    width: '101%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    transition: '.25s ease-in-out'
}

const mobileMenuLogoStyle = {
    maxWidth: '100%',
    height: 'auto',
    margin: '.5em',
    transition: '.25s ease-in-out,background-color .3s ease-out'
}

var buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
    marginRight: '10px'
};

const buttonStyleMobile = {
    display: 'flex',
    alignSelf: 'center',
    maxWidth: '100%',
    height: 'auto',
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
    marginRight: '10px'
}

const linkStyle = {
    flex: 1
};

export default NavBarComponent;
