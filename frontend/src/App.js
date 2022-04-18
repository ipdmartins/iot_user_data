import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import '../src/assets/css/home.css'

function App() {
  return (
    // <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes />
        <ToastContainer />
      </Router>
  );
}

export default App;