import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './assets/styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <App />
  </>,
);
