import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from 'components/pages/LoginPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={LoginPage} exact />
    </Switch>
  );
};

export default Router;
