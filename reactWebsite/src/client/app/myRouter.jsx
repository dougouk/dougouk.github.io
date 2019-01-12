import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainPage from './mainPage/mainPage.jsx';
import ProjectsPage from './projectsPage.jsx';
import AboutPage from './aboutPage/aboutPage.jsx';
import NavBarComponent from './components/navbar/navBar.jsx';
import './components/reuse/animations.css';

class MyRouter extends React.Component {
    render () {
        return (
            <div>
                <NavBarComponent style={navBarStyle}/>
                {/* <TransitionGroup>                
                    <CSSTransition 
                    key={this.props.location.pathname} 
                    timeout={{enter: 500, exit: 500}} 
                    classNames="example" > */}
                        <Switch>
                            <Route exact path='/' component={MainPage}/>
                            <Route path='/projectsPage' component={ProjectsPage}/>
                            <Route path='/about' component={AboutPage}/>
                        </Switch>
                    {/* </CSSTransition> */}
                {/* </TransitionGroup> */}

            </div>
        );
    }
}

const navBarStyle = {
    marginTop: 'auto'
};

export default withRouter(MyRouter);
