import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PAGE_PATHS } from 'services/constants';
import Route from './Route';
import Template from '../Template';
import Bracket from '../Bracket';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PAGE_PATHS.HOME} component={Bracket} />
        <Route component={Template} />
      </Switch>
    </BrowserRouter>
  );
}
