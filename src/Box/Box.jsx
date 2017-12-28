import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../reducers/Box';

class Box extends Component {
  state = {
    counter: 0, // wark
  };

  render() {
    console.log('render Box ' + this.props.box);
    console.dir(this.props);
    return (
      <div>
        <h1>Box text = {this.props.box}</h1>
        <button onClick={::this.onClick}>Hello</button>
      </div>
    );
  }

  onClick() {
    console.log('onClick');
    console.log('this.state', this);
    this.props.changeBox && this.props.changeBox('hello' + this.state.counter);
    this.state.counter++;
  }
}

const mapStateToProps = ({ Box }) => {
  console.log('state.Box', Box);
  return {
    box: Box.box,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBox: (text) => {
      dispatch(actions.changeBox(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
