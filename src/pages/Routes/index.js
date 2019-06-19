import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PAGE_PATHS } from 'services/constants';
import Route from './Route';
import Template from '../Template';
import Home from '../Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PAGE_PATHS.HOME} component={Home} />
        <Route component={Template} />
      </Switch>
    </BrowserRouter>
  );
}
