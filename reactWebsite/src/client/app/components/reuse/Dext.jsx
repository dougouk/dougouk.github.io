import React from 'react';

class Dext extends React.Component {
  render() {
    return (
        <div style={textStyle}>
            {this.props.children}
        </div>
    );
  }
}

const textStyle = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
}

export default Dext;
