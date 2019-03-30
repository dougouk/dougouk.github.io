import React from 'react';
import {render} from 'react-dom';
import Resize from 'react-resize';
import Header from './components/header/oldHeader.jsx';
import ProjectComponent from './components/project/projectDetail/ProjectComponent.jsx';
import Footer from './components/footer.jsx';
import ShowCaseProject from './components/project/projectBlock/showCaseProject.jsx';

const projects = [
    {
        title: 'GreenDetect',
        date: '2018',
        type: 'Machine Learning - Android Application',
        awards: ['ImplementAI 2018 2nd Place'],
        logo: require('./images/portfolio/greenDetect/logo.png'),
        demoImage1: require('./images/portfolio/greenDetect/demo.png'),
        shortDescription: 'Find out what\'s wrong with your plant with a single picture.',
        description: 'Is your plant dying? Could it have a disease? Find out with a picture.',
        devPost: 'https://devpost.com/software/green-detect',
        tags: [
            'Azure Custom Vision', 'Android', 'Machine Learning', 'Convolutional Neural Networks'
        ],
        color: '#1B5E20'
    },
    {
        title: 'Lets Eat',
        date: '2018',
        type: 'Smart home application - Google home',
        awards: ['UofTHacks2018 Krates Winner'],
        logo: require('./images/portfolio/letsEat/logo.png'),
        demoImage1: require('./images/portfolio/letsEat/demo.png'),
        shortDescription: 'Sometimes, food goes bad and we end up wasting it. Let\'s stop that.',
        description: 'Recipes curated to your groceries\' expiry date, and a smart assistant to help you have a hands-free cooking experience (this was before the Google Assistant Smart Displays came out).',
        devPost: 'https://devpost.com/software/mangez',
        tags: [
            'Dialogue SDK', 'Firebase Functions', 'NodeJS', 'Android', 'Google Assitant Chatbot'
        ],
        color: '#ffcc80'
    },
    {
        title: 'Trendy',
        date: '2017',
        type: 'Facebook Chat Bot',
        awards: ['Informa Challenge 1st Place'],
        logo: require('./images/portfolio/trendy.png'),
        demoImage1: require('./images/portfolio/trendy/chat1.png'),
        demoImage2: require('./images/portfolio/trendy/heatmap.png'),
        shortDescription: 'Data does not lie. Uncover trends with data driven algorithms to invest in emerging tech companies.',
        description: 'Data does not lie. Uncover trends with data driven algorithms to invest in emerging tech companies.',
        devPost: 'https://devpost.com/software/trendy',
        tags: [
            'Facebook SDK', 'Node.js', 'Heroku', 'Python'
        ],
        color: '#40C4FF'
    }, {
        title: 'Coffee Time',
        date: '2017',
        type: 'Android Application',
        logo: require('./images/portfolio/covfefe.png'),
        demoImage1: require('./images/portfolio/covfefe.png'),
        shortDescription: 'Let\'s make Bitcoin an everyday convenience',
        description: 'One friend pays for everyone\'s coffee, other friends pay back with Bitcoin through the Android app',
        devPost: 'https://devpost.com/software/coffee-time-eqr316',
        tags: [
            'Android', 'Firebase Auth', 'Firebase Database', 'Firebase Functions'
        ],
        color: '#FF6E40'
    }, {
        title: 'Danpool',
        date: '2017',
        type: 'Android Application',
        logo: require('./images/portfolio/danpool.png'),
        demoImage1: require('./images/portfolio/danpool/demo.png'),
        shortDescription: 'Get rid of the headache when you search for carpools on Facebook',
        description: 'Mobile application that greatly simplifies the process ' + 'of finding your next carpool between Ontario and Quebec cities. ' + 'Displays offers ' + 'by time of departure, with origins, destinations, and price all ' + 'readily shown to the user in a nice simple format.',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.danpool',
        tags: [
            'RegEx', 'Android', 'Facebook SDK', 'Google AdMob', 'SQLite'
        ],
        color: '#2979FF'
    }, {
        title: 'UWClosest',
        date: '2017',
        type: 'React-Native Application',
        logo: require('./images/projects/uwclosest.png'),
        demoImage1: require('./images/portfolio/uwclosest/parking2.png'),
        shortDescription: 'Are there parking spots available? Is the classroom open, or going to host a lecture soon? Let\'s find out with UWClosest',
        description: 'Mobile application that helps users find open classrooms,' + ' vending machines, and parking spots on the University of Waterloo campus.',
        playStore: 'https://play.google.com/store/apps/details?id=com.uwclosest',
        tags: [
            'React-Native', 'Node.js', 'Heroku', 'Postgre SQL'
        ],
        color: '#448AFF'
    }, {
        title: 'Simple Voice Recorder',
        date: '2017',
        type: 'Android Application',
        logo: require('./images/portfolio/enregistreur.png'),
        demoImage1: require('./images/portfolio/simpleRecorder/demo.png'),
        shortDescription: 'Simple. Quick. High-quality.',
        description: 'Simple, quick, high-quality, ad-free audio recording app',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.enregistreur',
        tags: [
            'Android', 'Java', 'Android Media Framework', 'Open-source Media Frameworks'
        ],
        color: '#FFB74D'
    }, {
        title: 'RecMob',
        date: '2017',
        type: 'Android Application (Freelancing)',
        logo: require('./images/portfolio/recordMob.jpg'),
        demoImage1: require('./images/portfolio/recMob/1.jpg'),
        shortDescription: 'End the fake news',
        description: 'Social video community where REAL recognizes REAL',
        website: 'http://recmob.com/',
        playStore: 'https://play.google.com/store/apps/details?id=com.recordmob',
        tags: [
            'Android', 'Java'
        ],
        color: '#000000'
    }, {
        title: 'DeafBand',
        date: '2017 (In progress)',
        type: 'Arduino & Android',
        logo: require('./images/projects/deafband.png'),
        demoImage1: require('./images/portfolio/deafband/fire.png'),
        shortDescription: 'Trained to recognize life-threatening situations',
        description: 'DeafBand is a headband-like device that can recognize and ' + 'pinpoint the direction of certain sounds such as car horns, screaming, etc. ' + 'Developed as a Fourth Year Design Project at the University of Waterloo.',
        playStore: 'https://play.google.com/store/apps/details?id=com.dan190.deafband',
        tags: [
            'Arduino', 'Android', 'Java', 'C', 'Bluetooth Stack'
        ],
        color: '#9E9E9E'
    }, {
        title: 'Savescription',
        date: '2017',
        type: 'WebApp',
        awards: ['KWHacks2017 Top 5'],
        logo: require('./images/projects/savescription.png'),
        demoImage1: require('./images/portfolio/saveScription/text.png'),
        shortDescription: 'Forgot to take your medicine? Let my bot call and remind you...',
        description: 'WebApp to send out automated prescription reminders through ' + 'text and phone calls to a list of managed patients.',
        devPost: 'https://devpost.com/software/safescription',
        tags: [
            'Bootstrap', 'HTML', 'CSS', 'Firebase API', 'Twilio API'
        ],
        color: '#29B6F6'
    }, {
        title: 'WalkingBuddy',
        date: '2017',
        type: 'Android Application',
        awards: [
            'Hackatown2017 Top 6', 'Founders Institute Award'
        ],
        logo: require('./images/portfolio/walkingBuddy.png'),
        demoImage1: require('./images/portfolio/walkingBuddy/1.jpg'),
        shortDescription: 'Afraid to walk home alone? Get a Walking Buddy :)',
        description: 'Android App that matches people to walk home (or anywhere)' + ' together, with safety in mind.',
        devPost: 'https://devpost.com/software/walking-buddy',
        tags: [
            'Android', 'Google Places API', 'Google Maps API', 'Firebase API'
        ],
        color: '#FFAB00'
        // color: '#e2574c'
    }, {
        title: 'Foody',
        date: '2017',
        type: 'WebApp',
        logo: require('./images/portfolio/foody.png'),
        demoImage1: require('./images/portfolio/foody/demo.png'),
        shortDescription: 'Foody, what should I eat?',
        description: 'Voice-controlled WebApp that suggests restaurant dishes ' + 'based on user feedback. Uses NLP.',
        devPost: 'https://devpost.com/software/foody-lfbvrn',
        tags: [
            'Nuance Nina Web API', 'Clarify API', 'YellowPages API', 'Python'
        ],
        color: '#d6be89'
    }, {
        title: 'ParkTheValley',
        date: '2017',
        type: 'Android Application',
        logo: require('./images/portfolio/parker.png'),
        demoImage1: require('./images/portfolio/parkTheValley/demo.png'),
        shortDescription: 'AirBnb & Uber for parking.',
        description: 'AirBnb & Uber for parking.',
        devPost: 'https://devpost.com/software/parkthevalley',
        tags: [
            'Android', 'Google Maps API', 'Google Places API', 'Firebase API'
        ],
        color: '#66BB6A'
    }
]

const colors = [
    '#42A5F5',
    '#FFB74D',
    '#5C6BC0',
    '#26A69A',
    '#FF7043',
    '#7E57C2',
    '#FFC107',
    '#78909C'
]

const colors2 = ['#FFF', '#2979FF']

const textColors = ['#000', '#fff']
class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        // Start at top of page
        window.scrollTo(0, 0);
        this.state = {
            selectedProject: null,
            showProjectInfo: false,
            projectOpacity: 1,
            pointerEvents: 'auto',
            projects: projects
        }
    }
    
    componentWillMount() {
        console.log('Project Page componentWillMount')
    }

    componentWillUnmount() {
        console.log('Project Page componentWillUnmount')        
    }

    showProjectDetailsPopup(project) {
        this.setState({selectedProject: project, showProjectInfo: true, projectOpacity: 0.3, pointerEvents: 'none'})
    }

    hideProjectDetailsPopup(event) {
        if (this.state.showProjectInfo) {
            this.setState({showProjectInfo: false, projectOpacity: 1, pointerEvents: 'auto'})
        }
    }

    cute(event) {
        console.log('I love you ');
    }

    render() {

        const items = this.state.projects.map((project, index) => {
            const backgroundColor = index % 2 == 0 ? '#fff' : project.color;
            return (
                <ShowCaseProject 
                    key={index} 
                    project={project} 
                    color={backgroundColor} 
                    textColor={textColors[index % textColors.length]} 
                    buttonText='SEE MORE' 
                    moreInfo={this.showProjectDetailsPopup.bind(this)}/>
            )
        });

        return (<div style={container}>
            <Resize>
                <div onClick={this.hideProjectDetailsPopup.bind(this)}>
                    <div id='ProjectsPage' style={Object.assign({
                            opacity: this.state.projectOpacity
                    }, projectContainer)}>
                        {items}
                    </div>

                    <div style={danguinStyle}/>
                    <Footer/>
                </div>
                {
                    (() => {
                        if (this.state.showProjectInfo && this.state.selectedProject != null) {
                            return (
                                <ProjectComponent 
                                    key={this.state.selectedProject.title} 
                                    cuteBaozi={this.cute.bind(this)} 
                                    project={this.state.selectedProject} 
                                    lessInfo={this.hideProjectDetailsPopup.bind(this)}/>
                            );
                        }
                    })()
                }
            </Resize>
        </div>);
    }
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

const projectContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '4em'
}

const danguinStyle = {
    background: 'url("./reactWebsite/src/client/app/images/danguin.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '30em'
};

export default ProjectsPage;
