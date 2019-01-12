import React from 'react';
import {render} from 'react-dom';
import Resize from 'react-resize';
import Footer from '../components/footer.jsx';

class AboutPage extends React.Component {
    render() {
        return(
            <div className='AboutPageContainer'>
                <Resize>
                    
                    <div style={danguinStyle}/>
                    <Footer/>
                </Resize>
            </div>
        )
    }
}

const danguinStyle = {
    background: 'url("./reactWebsite/src/client/app/images/danguin.jpg") no-repeat center center scroll',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '30em',
};

export default AboutPage;
