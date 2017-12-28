import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // получаем данные из store благодаря connect
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';

import reducerStore from './reducers';

import reducers from '.';
import App from './App';

const store = createStore(reducerStore);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  console.log('Update');
  module.hot.accept('./App', function() {
    console.log('Accepting the updated module!');
    render(App);
  });
}
