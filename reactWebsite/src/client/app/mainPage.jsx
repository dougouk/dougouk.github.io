import React from 'react';
import {render} from 'react-dom';
import Resize from 'react-resize';
import Header from './components/header.jsx';
import ShowCaseComponent from './components/showCaseComponent.jsx';
import Footer from './components/footer.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './components/reuse/animations.css';

const lightBlue = '#87b4ff';
const darkBlue = '#2979FF';
const blueColor = '#42A5F5';
const indigoColor = '#5C6BC0';
const purpleColor = '#7E57C2';
const amberColor = '#FFD54F';
const orangeColor = '#FFB74D';
const deepOrangeColor = '#FF7043';
const blueGreyColor = '#78909C';

const showcases = [
    {
        title: 'Projects',
        description: 'Plan, code, develop, architect, I do all that',
        buttonText: 'See my projects',
        link: '/projects',
        color: darkBlue,
        imageSrc: require('./images/coding.jpg')
    },
    // {
    //     title: 'About me',
    //     description: 'Raised in the West, developing in the East',
    //     buttonText: 'Know more about me',
    //     link: '/about',
    //     color: lightBlue,
    //     imageSrc: require('./images/busy.jpg')
    // }
]

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        // Start at top of page
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
          if (nextProps.visible) {
              $(findDOMNode(this)).stop( true, true ).fadeIn('slow');
          } else {
              $(findDOMNode(this)).stop( true, true ).fadeOut('slow');
          }
        }
      }

    render() {
        const items = showcases.map((showcase, index) =>(
                <ShowCaseComponent
                                key={index}
                                color={showcase.color}
                                title={showcase.title}
                                description={showcase.description}
                                buttonText={showcase.buttonText}
                                link={showcase.link}
                                imageSrc={showcase.imageSrc}/>
            ));

        return (<div style={container}>
            <Resize>
                <ReactCSSTransitionGroup
                             transitionName="example"
                             transitionEnterTimeout={500}
                             transitionLeaveTimeout={300}
                             transitionAppear={true}
                             transitionAppearTimeout={500}>
                    <Header/>
                    {items}
                </ReactCSSTransitionGroup>
                <div style={danguinStyle}/>
                <Footer/>
            </Resize>
        </div>);
    }
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const projectContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#E3F2FD',
    paddingBottom: '1em'
}

const danguinStyle = {
    background: 'url("./reactWebsite/src/client/app/images/danguin.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '30em'
};

export default MainPage;
