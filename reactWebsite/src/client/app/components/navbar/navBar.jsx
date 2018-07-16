import React from 'react';
import {render} from 'react-dom';
import Dext from '../reuse/Dext.jsx';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class NavBarComponent extends React.Component {
    constructor(props){
      super(props);
      this.state= {
          isHide: false
      };
      this.hideBar = this.hideBar.bind(this)
    }

    hideBar(){
        // As you scroll down, scrollY will be higher
        let hidden = this.state.isHide
        if (window.scrollY > this.prev && !hidden) {
            // Scrolling down, and not hidden
            // Hide the navbar
            this.setState({isHide: true});
            // TODO animation
        } else if (window.scrollY < this.prev && hidden) {
            // Scrolling up, and hidden
            // Show the navbar
            this.show();
        }

        this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll',this.hideBar);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll',this.hideBar);
    }

    show() {
        // TODO animation
        this.setState({isHide: false});
    }

    render () {
        let contactLinks = [
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
                routerLink: '/projects'
            },
            // {
            //     name: 'Contact',
            //     image: require('../../images/devpost.png'),
            //     link: '#footer',
            //     routerLink: '/'
            // }
        ];
        if (!this.state.isHide) {
            return (
                    <TransitionGroup style={container}>
                        
                            {contactLinks.map((contact, index) =>
                                this.getButton(contact, index)
                            )};
                    </TransitionGroup>
            );
        } else {
            return (<div></div>);
        }

      }

  getButton(props, index) {
      return (
        <CSSTransition
            key={'navBar'}
            classNames='navBar'
            timeout={300}
            appear={true}>
            <Link to={props.routerLink}
                style={buttonStyle}
                key={index}>
                {/* <a href={props.link}
                    style={buttonStyle}
                    key={props.name}
                    onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}> */}
                <div style={buttonStyle}>
                    <Dext style={linkStyle}>
                        {props.name}
                    </Dext>
                </div>
                {/* </a> */}
            </Link>
        </CSSTransition>
      )
  }

  handleClick(e){
      e.preventDefault();
  }
}

const container = {
    backgroundColor: '#2979FF',
    width: '101%',
    height: '5em',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed'
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
    marginRight: '10px'
};

const linkStyle = {
    flex: 1
};

export default NavBarComponent;
