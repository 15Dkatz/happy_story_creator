import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import history from './history';
import Home from './components/Home';
import Instagram from './components/Instagram';
import Blogging from './components/Blogging';
import './index.css';

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/instagram' component={Instagram} />
      <Route path='/blogging' component={Blogging} />
    </Switch>
  </Router>,
  document.getElementById('root')
);