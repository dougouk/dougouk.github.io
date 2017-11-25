import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './myRouter.jsx';

class Root extends React.Component {
    render () {
        console.log('ROOT');
        return (
            <div>
                <BrowserRouter>
                    <MyRouter/>
                </BrowserRouter>
            </div>
        )
    }
}

render(<Root/>, document.getElementById('app'));
