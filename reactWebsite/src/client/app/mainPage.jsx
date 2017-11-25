import React from 'react';
import {render} from 'react-dom';
import Resize from 'react-resize';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Header from './components/header.jsx';
import ShowCaseComponent from './components/showCaseComponent.jsx';
import Footer from './components/footer.jsx';

const blueColor = '#42A5F5';
const indigoColor = '#5C6BC0';
const purpleColor = '#7E57C2';
const amberColor = '#FFD54F';
const orangeColor = '#FFA726';
const deepOrangeColor = '#FF7043';
const blueGreyColor = '#78909C';
class MainPage extends React.Component {
  render () {
    return (
        <div style={container}>
            <Resize>
                <Header/>
                <ShowCaseComponent
                    color={deepOrangeColor}
                    title='title'
                    description='description'
                    buttonText='buttonText'
                    link='/projects'
                    imageSrc= {require('./images/coding.jpg')}
                />

                <div style={danguinStyle}/>
                <Footer/>
            </Resize>
        </div>
    );
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
    paddingBottom: '1em',
}

const danguinStyle = {
    background: 'url("./reactWebsite/src/client/app/images/danguin.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '30em',
};

// render(<MainPage/>, document.getElementById('app'));
export default MainPage;
