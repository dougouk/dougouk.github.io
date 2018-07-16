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

        let items = contactLinks.map((contact, index) =>
            {
                console.log(contact);
                return this.getButton(contact, index);  
            }
        );
        if (!this.state.isHide) {
            return (
                    <TransitionGroup>
                        <CSSTransition
                            key={'navBar'}
                            classNames='navBar'
                            timeout={300}
                            appear={true}>
                            <div style={container}>
                                {items};
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
            );
        } else {
            return (<div></div>);
        }

      }

  getButton(props, index) {
      return (
            <Link to={props.routerLink}
                style={buttonStyle}
                key={index}>
                <div style={buttonStyle}>
                    <Dext style={linkStyle}>
                        {props.name}
                    </Dext>
                </div>
            </Link>
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
