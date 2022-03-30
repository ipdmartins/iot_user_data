import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavbarMenu from './components/navbar';
import Routes from './routes';

// function App(props) {
//   return (
//     <Router>
//       <Routes />
//     </Router>
//   )
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
