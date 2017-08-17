import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Header from './components/header.jsx';
import ContactBar from './components/contactBar/contactBar.jsx';
import ProjectComponent from './components/ProjectComponent.jsx';

const projectImages = [
    {
        source: require('./images/portfolio/uwclosest.png')
    }
]

class App extends React.Component {
  render () {
    return (
        <div>
            <Header/>
            <ContactBar/>
            <ProjectComponent title='UWClosest' date='2017' type='React-Native Application' image={projectImages[0]}/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
