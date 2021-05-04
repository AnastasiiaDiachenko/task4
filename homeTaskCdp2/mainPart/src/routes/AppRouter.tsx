import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={HomePage}
      />
      <Route
        path="/film/:id"
        exact
        component={HomePage}
      />
      <Route
        path="/search/:title"
        exact
        component={HomePage}
      />
      <Route
        path="/404"
        exact
        component={NotFoundPage}
      />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
