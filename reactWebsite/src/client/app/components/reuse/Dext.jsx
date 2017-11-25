import React from 'react';

class Dext extends React.Component {
  render() {
    return (
        <div style={this.props.inputStyle}>
            <div style={textStyle}>
                {this.props.children}
            </div>
        </div>

    );
  }
}

const textStyle = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
}

export default Dext;
