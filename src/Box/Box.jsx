import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../reducers';

class Box extends Component {
  render() {
    console.log('render Box ' + this.props.box);
    return (
      <div>
        <h1>Box text = {this.props.box}</h1>
        <button onClick={::this.onClick}>Hello</button>
      </div>
    );
  }

  onClick() {
    console.log('onClick');
    console.dir(actions);
    this.props.onClick && this.props.onClick('hello');
  }
}

const mapStateToProps = state => {
  return {
    box: state.box
  };
};
let count = 0;
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(actions.changeBox('hello' + count++));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
