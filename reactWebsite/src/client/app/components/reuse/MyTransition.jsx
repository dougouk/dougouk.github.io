import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class MyTransition extends React.Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={'key'}
          classNames={this.props.transitionClassName}
          timeout={700}
          appear={true}>
          {this.props.children}
          </CSSTransition>
      </TransitionGroup>
    );
  }
}


export default MyTransition;
