import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Route from './Route';

const Home = React.lazy(() => import('../pages/Home'));

// const App = React.lazy(() => import('../pages/App'));

// const NotFound = React.lazy(() => import('../pages/NotFound'));

function Routes() {
  return (
    <div className="h-100">
      <Route path="/app" component={Home} />
      {/* <Suspense fallback={<div className="loading" />}>
        <BrowserRouter>
          <Switch>
            <Route path="/app" component={App} isPrivate />
            <Route path="/error" exact component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense> */}
    </div>
  );
}

export default Routes;
