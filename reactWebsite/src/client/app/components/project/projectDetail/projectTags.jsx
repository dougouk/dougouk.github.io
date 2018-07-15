import React from 'react';
import {render} from 'react-dom';
import Dext from '../../reuse/Dext.jsx';

class ProjectTags extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tags: props.tags
        };
    }
    render () {
        let tags = this.state.tags;

        if(tags){
            return (
                <div className='header' style={tagContainer}>
                    {tags.map((tag, index) =>
                        <div key={index} style={tagStyle}>
                            <Dext>
                                {tag}
                            </Dext>
                        </div>
                    )}
                </div>
            );
        }else{
            console.log('returning null');
            return null;
        }

      }

}

const tagContainer ={
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1em'
}

const tagStyle = {
    backgroundColor: '#E3F2FD',
    color: '#42A5F5',
    marginTop: '0',
    marginBottom: '0.2em',
    padding: '0.5em',
    borderRadius: '1em',
    marginRight: '0.2em'
}


export default ProjectTags;
