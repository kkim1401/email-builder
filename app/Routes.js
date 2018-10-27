/* eslint flowtype-errors/show-errors: 0 */
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './pages/App';

const Home = lazy(() => import('./pages/Home'));

export default () => (
  <App>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.HOME} component={Home} />
      </Switch>
    </Suspense>
  </App>
);
