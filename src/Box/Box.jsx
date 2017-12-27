import React, { Component } from 'react';

import actions from '../reducers';

export default class Box extends Component {
  render() {
    return (
      <div>
        <h1>Box Component 2 33 33</h1>
        <button onClick={::this.onClick}>Hello</button>
      </div>
    );
  }

  onClick() {
    console.log('onClick');
    actions.changeBox('hello');
  }
}
