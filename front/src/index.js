import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const render = () => {
  import(`./assets/css/sass/themes/gogo.${color}.scss`).then(_ => {
    // eslint-disable-next-line global-require
    require('./App');
  });
};

render();