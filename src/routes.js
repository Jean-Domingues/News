import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Page404 from './pages/Page404';
import Details from './pages/Details';
import Search from './pages/Search';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/search" component={Search} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
