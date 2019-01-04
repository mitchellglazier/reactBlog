import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home'
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
