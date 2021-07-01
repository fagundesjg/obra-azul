import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Cart, Home } from '../pages';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Fragment>
  );
};

export { Routes };
