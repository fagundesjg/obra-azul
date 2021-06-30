import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
