import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Coin from '../pages/Coin';
import Trade from '../pages/Trade';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/:coin/:coinName" component={Coin} />
    <Route path="/trade" component={Trade} />
  </Switch>
);

export default Routes;
