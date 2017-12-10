import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';
import TypeWriter from 'react-typewriter';
import NavBarComponent from './navbar/navBar.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typing: 1
        };
    }

    loopTyping() {
        setTimeout(function() {
            if (this.state.typing == 1) {
                // erase all
                this.setState({
                    typing: -1
                });
            } else {
                // write again
                this.setState({
                    typing: 1
                });
            }
        }.bind(this), 500);
    }
    render() {
        let name = 'Dan Kim';
        let description = 'Learner, Creator, Developer';
        return (<div id="home" style={mainContainer}>
            <div style={headerContainer}>
                <h1 style={titleStyle}>{name}</h1>
                <TypeWriter typing={this.state.typing} onTypingEnd={this.loopTyping.bind(this)}>
                    <h3 style={descriptionStyle}>{description}</h3>
                </TypeWriter>
            </div>
        </div>);
    }
}

const mainContainer = {
    // background: 'url("./reactWebsite/src/client/app/images/bg.jpg") no-repeat center center scroll',
    // backgroundSize: 'cover',
    backgroundColor: '#FFF',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%'
};

const headerContainer = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '5em',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#2979FF',
    margin: 0
};

const descriptionStyle = {
    textAlign: 'center',
    fontSize: '3em',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#2979FF',
    marginTop: '1em'
};

export default Header;
