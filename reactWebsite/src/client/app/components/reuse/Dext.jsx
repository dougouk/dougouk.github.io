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
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif'
}

export default Dext;
