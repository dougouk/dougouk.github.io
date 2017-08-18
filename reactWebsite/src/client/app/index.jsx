import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import Header from './components/header.jsx';
import ContactBar from './components/contactBar.jsx';
import ProjectComponent from './components/ProjectComponent.jsx';

const projects = [
    {
        title: 'UWClosest',
        date: '2017',
        type: 'React-Native Application',
        source: require('./images/portfolio/uwclosest.png'),
        description: 'UWClosest is a mobile application that helps users find washrooms,' +
        'vending machines, and empty classrooms on the University of Waterloo campus.' +
        'Existing webpages to find these amenities are slow and difficult to use, so' +
        'this project is motivated by a desire to create an application to help people' +
        'find amenities in campus easily and reliably, with the push of one button.',
        playStore: 'https://play.google.com/store/apps/details?id=com.uwclosest'
    },
    {
        title: 'Simple Voice Recorder',
        date: '2017',
        type: 'Android Application',
        source: require('./images/portfolio/enregistreur.png'),
        description: 'Simple, quick, high-quality, ad-free audio recording app',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.enregistreur'
    },
    {
        title: 'RecMob',
        date: '2017',
        type: 'Freelancing - Android Application',
        source: require('./images/portfolio/recordMob.jpg'),
        description: 'Social video community where REAL recognizes REAL',
        website: 'http://recmob.com/',
        playStore: 'https://play.google.com/store/apps/details?id=com.recordmob'
    },
    {
        title: 'DeafBand',
        date: '2017 - In progress',
        type: 'Fourth Year Engineering Design Project - Arduino, Android',
        source: require('./images/portfolio/deafband.png'),
        description: 'DeafBand is a headband-like device that can recognizes and '+
        'pinpoints the direction of certain sounds such as car horns, screaming, etc',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.deafband'
    },
    {
        title: 'Savescription',
        date: '2017',
        type: 'WebApp - KWHacks2017 Top 5',
        source: require('./images/portfolio/savescription.png'),
        description: 'WebApp to send out automated prescription reminders and '+
            'other relevant information for patients.',
        devPost: 'https://devpost.com/software/safescription'
    },
    {
        title: 'WalkingBuddy',
        date: '2017',
        type: 'Android Application - Hackatown2017 Top 6 | Founders Institute Award',
        source: require('./images/portfolio/walkingBuddy.png'),
        description: 'Android App that matches people to walk home (or anywhere)'+
            ' together, with safety in mind.',
        devPost: 'https://devpost.com/software/walking-buddy'
    },
    {
        title: 'Foody',
        date: '2017',
        type: 'WebApp',
        source: require('./images/portfolio/foody.png'),
        description: 'Voice-controlled WebApp that suggests restaurant dishes ' +
            'based on user feedback. Uses NLP.',
        devPost: 'https://devpost.com/software/foody-lfbvrn'
    },
    {
        title: 'ParkTheValley',
        date: '2017',
        type: 'Android Application',
        source: require('./images/portfolio/parker.png'),
        description: 'AirBnb & Uber for parking.',
        devPost: 'https://devpost.com/software/parkthevalley'
    }
]

class App extends React.Component {
  render () {
    return (
        <div style={container}>
            <Header/>
            <ContactBar/>
            <div style={projectContainer}>
                <ProjectComponent project={projects[0]}/>
                <ProjectComponent project={projects[1]}/>
                <ProjectComponent project={projects[2]}/>
                <ProjectComponent project={projects[3]}/>
                <ProjectComponent project={projects[4]}/>
                <ProjectComponent project={projects[5]}/>
                <ProjectComponent project={projects[6]}/>
                <ProjectComponent project={projects[7]}/>
            </div>
        </div>
    );
  }
}

const container = {
    backgroundColor: '#E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const projectContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
}
render(<App/>, document.getElementById('app'));
