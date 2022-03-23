import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/scss'

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const Routes = React.lazy(() => import('./routes'));

ReactDOM.render(
  // <Provider store={store}>
    // <PersistGate persistor={persistor}>
      <Suspense fallback={<div className="loading" />}>
        <Routes />
        <ToastContainer />
      </Suspense>,
    // </PersistGate>
  // </Provider>,
  document.getElementById('root'),
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
