import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Apps from './components/Apps';
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import FetchApps from "./components/FetchApps"

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apps" component={FetchApps} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
