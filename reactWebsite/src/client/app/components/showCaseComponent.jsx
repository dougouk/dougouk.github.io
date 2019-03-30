import React from 'react';
import {render} from 'react-dom';
import Dext from './reuse/Dext.jsx';
import {Link} from 'react-router-dom';
import styles from './reuse/animations.css';

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


        let color = this.props.color;
        let title = this.props.title;
        let description = this.props.description;
        let buttonText = this.props.buttonText;
        let link = this.props.link;
        let imageSrc = this.props.imageSrc;

        if(isMobile) {
            return (<div className={styles.header} 
                id={this.props.title} 
                style={Object.assign({
                    backgroundColor: this.props.color
                    }, mainContainerMobile)}>
                <div style={imageDivMobile}>
                    <img src={imageSrc} style={imageStyleMobile}/>
                </div>
                <div style={textDivMobile}>
                    <Dext inputStyle={titleStyleMobile}>
                        {title}
                    </Dext>
                    <Dext inputStyle={descriptionStyleMobile}>
                        {description}
                    </Dext>

                    <Link to={link} style={buttonStyleMobile}>
                        <Dext>
                            {buttonText}
                        </Dext>
                    </Link>
                </div>

            </div>);
        } else {

            return (
                <div className={styles.header} 
                id={this.props.title} 
                style={Object.assign({
                    backgroundColor: this.props.color
                    }, mainContainerDesktop)}>

                    <div style={textDivDesktop}>
                        <Dext inputStyle={titleStyleDesktop}>
                            {title}
                        </Dext>
                        <Dext inputStyle={descriptionStyleDesktop}>
                            {description}
                        </Dext>

                        <Link to={link} style={buttonStyleDesktop}>
                            <Dext>
                                {buttonText}
                            </Dext>
                        </Link>
                    </div>
                    <div style={imageDivDesktop}>
                        <img src={imageSrc} style={imageStyleDesktop}/>
                    </div>
                </div>
            );
        }

    }
}


// Desktop styles.
const mainContainerDesktop = {
    // background: 'url("./reactWebsite/src/client/app/images/grad.jpg") no-repeat center center scroll',
    // backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    
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
    marginTop: '4em',
    marginBottom: '3em'
}
const buttonStyleDesktop = {
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
const imageStyleDesktop = {
    width: '50%',
    height: '50%'
}

// Mobile styles.
const mainContainerMobile = {
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    maxHeight: '3em',
    width: '50%',
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

export default ShowCaseComponent;
