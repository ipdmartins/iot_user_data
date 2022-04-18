import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';
import  '../src/assets/css/home.css'

function App(){
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
