import React from 'react';
import { render} from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MyRouter from './myRouter.jsx';

class Root extends React.Component {
    render () {
        return (
            <div>
                <HashRouter>
                    <MyRouter/>
                </HashRouter>
            </div>
        )
    }
}

render(<Root/>, document.getElementById('app'));
