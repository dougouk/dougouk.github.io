import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainPage.jsx';

class MyRouter extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path='/' component={MainPage}/>
                    <Route path='/projects' component={MainPage}/>
                </Switch>
            </div>
        );
    }
}

export default MyRouter;
