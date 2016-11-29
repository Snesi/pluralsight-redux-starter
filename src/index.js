import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
/* eslint-disable import/no-unresolved */
import '!style!css!./styles/styles.css';
import '!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css';


render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
