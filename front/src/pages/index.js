import React, { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Route,
  withRouter,
  useLocation,
  Switch,
  Redirect,
  NavLink as NavLinkRouter,
} from 'react-router-dom';
// import api from '../../services/api';
// import Navbar from '../../components/Navs/Navbar';
// import Footer from '../../components/Navs/Footer';

const SubCategoryObject = React.lazy(() =>
  import('./SubCategoryObject'),
);

function IoT({ match, history }) {
  console.log(match);
  const className = useSelector(state => state.sidebar.containerClasses);
  const location = useLocation();
  const { IoT, token, clinic, acceptedTerm } = useSelector(
    state => state.auth,
  );
  const currentRoute = location.pathname.split('/')[2];
  const [modalOption, setModalOption] = useState(true);
  const toggle = () => setModalOption(!modalOption);

  // useEffect(() => {
  //   api.defaults.headers.authorization = `Bearer ${token}`;
  // }, [token]);

  return (
    <>
      <div id="app-container" className={className}>
        <Navbar history={history} />
        <main>
          <div className="container-fluid mt-0">
            <div className="dashboard-wrapper mt-0">
              <Suspense fallback={<div className="loading" />}>
                <Switch>
                  <Route
                    path={`${match.url}/subcategoryobject/:id`}
                    exact
                    render={props => <SubCategoryObject {...props} />}
                  />
                  <Redirect to="/error" />
                </Switch>
              </Suspense>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(IoT);
