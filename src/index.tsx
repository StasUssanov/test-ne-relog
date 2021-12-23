import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './theme/index.scss';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
