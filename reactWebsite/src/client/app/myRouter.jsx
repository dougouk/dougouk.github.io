import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainPage.jsx';
import ProjectsPage from './projectsPage.jsx';
import NavBarComponent from './components/navbar/navBar.jsx';

class MyRouter extends React.Component {
    render () {
        return (
            <div>
                <NavBarComponent style={navBarStyle}/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/projects' component={ProjectsPage}/>
                </Switch>
            </div>
        );
    }
}

const navBarStyle = {
    marginTop: 'auto'
};

export default MyRouter;
