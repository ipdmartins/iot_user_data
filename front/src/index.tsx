import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'));

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

// import './assets/css/vendor/bootstrap.rtl.only.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// import {
//   defaultColor,
//   isDarkSwitchActive,
//   themeColorStorageKey,
// } from './constants/defaultValues';

// const color =
//   isDarkSwitchActive && localStorage.getItem(themeColorStorageKey)
//     ? localStorage.getItem(themeColorStorageKey)
//     : defaultColor;

// localStorage.setItem(themeColorStorageKey, color);

// const render = () => {
//   import(`./assets/css/sass/themes/gogo.${color}.scss`).then(_ => {
//     // eslint-disable-next-line global-require
//   });
//   require('./App');
// };

// render();