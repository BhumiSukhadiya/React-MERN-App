/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import User from './modules/User/pages/UserHomepage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
 https://github.com/reactjs/react-router/issues/2182 and
 https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/Authentication/pages/RegisterPage');
  require('./modules/Authentication/pages/LoginPage');
  require('./modules/App/pages/HomePage');
  require('./modules/Authentication/pages/LogoutPage');
  require('./modules/User/pages/UserProfilePage');
  require('./modules/NotFound');
  require('./modules/User/pages/ChangePasswordPage');
}

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/pages/HomePage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
    <Route
      path="/register"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Authentication/pages/RegisterPage').default);
        });
      }}
    />
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Authentication/pages/LoginPage').default);
        });
      }}
    />
    <Route
      path="/logout"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Authentication/pages/LogoutPage').default);
        });
      }}
    />

    <Route path="/userhome" component={User}>
      <IndexRoute
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/User/pages/UserProfilePage').default);
          });
        }}
      />
      <Route
        path="/userhome/posts"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
          });
        }}
      />
      <Route
        path="/userhome/ChangePassword"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/User/pages/ChangePasswordPage').default);
          });
        }}
      />
    </Route>
    <Route
      path="*"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/NotFound').default);
        });
      }}
    />
  </Route>
);
