import React from 'react';
import { render } from 'react-dom';
import Resize from 'react-resize';
import Header from './components/header.jsx';
import ProjectComponent from './components/project/ProjectComponent.jsx';
import Footer from './components/footer.jsx';

const projects = [
    {
        title: 'Danpool',
        date: '2017',
        type: 'Android Application',
        source: require('./images/portfolio/danpool.png'),
        description: 'Mobile application that greatly simplifies the process ' +
            'of finding your next carpool between Ontario and Quebec cities. ' +
            'Displays offers ' +
            'by time of departure, with origins, destinations, and price all ' +
            'readily shown to the user in a nice simple format.',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.danpool',
        tags: ['RegEx', 'Android', 'Facebook SDK', 'Google AdMob', 'SQLite']
    },
    {
        title: 'UWClosest',
        date: '2017',
        type: 'React-Native Application',
        source: require('./images/portfolio/uwclosest.png'),
        description: 'Mobile application that helps users find open classrooms,' +
        ' vending machines, and parking spots on the University of Waterloo campus.',
        playStore: 'https://play.google.com/store/apps/details?id=com.uwclosest',
        tags: ['React-Native', 'Node.js', 'Heroku', 'Postgre SQL']
    },
    {
        title: 'Simple Voice Recorder',
        date: '2017',
        type: 'Android Application',
        source: require('./images/portfolio/enregistreur.png'),
        description: 'Simple, quick, high-quality, ad-free audio recording app',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.enregistreur',
        tags: ['Android', 'Java', 'Android Media Framework', 'Open-source Media Frameworks']
    },
    {
        title: 'RecMob',
        date: '2017',
        type: 'Android Application (Freelancing)',
        source: require('./images/portfolio/recordMob.jpg'),
        description: 'Social video community where REAL recognizes REAL',
        website: 'http://recmob.com/',
        playStore: 'https://play.google.com/store/apps/details?id=com.recordmob',
        tags: ['Android', 'Java']
    },
    {
        title: 'DeafBand',
        date: '2017 (In progress)',
        type: 'Arduino & Android',
        source: require('./images/portfolio/deafband.png'),
        description: 'DeafBand is a headband-like device that can recognize and '+
        'pinpoint the direction of certain sounds such as car horns, screaming, etc. ' +
        'Being developed as the Fourth Year Design Project at the University of Waterloo.',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.deafband',
        tags: ['Arduino', 'Android', 'Java', 'C', 'Bluetooth Stack']
    },
    {
        title: 'Savescription',
        date: '2017',
        type: 'WebApp',
        awards: ['KWHacks2017 Top 5'],
        source: require('./images/portfolio/savescription.png'),
        description: 'WebApp to send out automated prescription reminders through '+
            'text and phone calls to a list of managed patients.',
        devPost: 'https://devpost.com/software/safescription',
        tags: ['Bootstrap', 'HTML', 'CSS', 'Firebase API', 'Twilio API']
    },
    {
        title: 'WalkingBuddy',
        date: '2017',
        type: 'Android Application',
        awards: ['Hackatown2017 Top 6', 'Founders Institute Award'],
        source: require('./images/portfolio/walkingBuddy.png'),
        description: 'Android App that matches people to walk home (or anywhere)'+
            ' together, with safety in mind.',
        devPost: 'https://devpost.com/software/walking-buddy',
        tags: ['Android', 'Google Places API', 'Google Maps API', 'Firebase API']
    },
    {
        title: 'Foody',
        date: '2017',
        type: 'WebApp',
        source: require('./images/portfolio/foody.png'),
        description: 'Voice-controlled WebApp that suggests restaurant dishes ' +
            'based on user feedback. Uses NLP.',
        devPost: 'https://devpost.com/software/foody-lfbvrn',
        tags: ['Nuance Nina Web API', 'Clarify API', 'YellowPages API', 'Python']
    },
    {
        title: 'ParkTheValley',
        date: '2017',
        type: 'Android Application',
        source: require('./images/portfolio/parker.png'),
        description: 'AirBnb & Uber for parking.',
        devPost: 'https://devpost.com/software/parkthevalley',
        tags: ['Android', 'Google Maps API', 'Google Places API', 'Firebase API']
    }
]


class ProjectsPage extends React.Component {
    render () {
        return (
            <div style={container}>
                <Resize>
                    {/* <Header/> */}
                    {/* <ContactBar/> */}
                    <div id='projects' style={projectContainer}>
                        {projects.map((project, index) =>
                            <ProjectComponent project={project}/>
                        )};
                    </div>
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

export default ProjectsPage;
