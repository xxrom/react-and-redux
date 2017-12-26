import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  console.log('Update');
  module.hot.accept('./App', function() {
    console.log('Accepting the updated printMe module!');
    render();
  });
}
