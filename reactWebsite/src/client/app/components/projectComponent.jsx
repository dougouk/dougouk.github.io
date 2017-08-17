import React from 'react';
import {render} from 'react-dom';
import Card from 'react-material-card';

class ProjectComponent extends React.Component {
  render () {
      let title = this.props.title;
      let date = this.props.date;
      let type = this.props.type;
      let description = this.props.description;
      let image = this.props.image;

    return (
        <div class='header' style={container}>
            <Card overLevel={3} outLevel={1}>
                <img src={image.source} style={imageStyle}/>
                <h2 style={titleStyle}>{title}</h2>
                <p style={noteStyle}>{date} - {type}</p>
                <p style={descriptionStyle}>{description}</p>
            </Card>
        </div>
    );
  }
}

const container = {
    margin: 'auto',
    width: '50vw'
};

const imageStyle = {
    width: '100%'
}
const titleStyle = {
    margin: '1em 1em 0em 0em',
    textAlign: 'left',
    fontSize: '3em'
};

const noteStyle = {
    textAlign: 'left'
};

const descriptionStyle = {
    textAlign: 'left'
};

export default ProjectComponent;
