import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainPage.jsx';
import ProjectsPage from './projectsPage.jsx';

class MyRouter extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path='/' component={MainPage}/>
                    {/* <Route path='/projects' component={ProjectsPage}/> */}
                </Switch>
            </div>
        );
    }
}

export default MyRouter;
