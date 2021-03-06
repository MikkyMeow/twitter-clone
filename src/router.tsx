import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from 'components/pages/LoginPage';
import Home from 'components/pages/Home';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={LoginPage} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
};

export default Router;
