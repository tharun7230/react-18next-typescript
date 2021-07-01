import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/Homepage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="*">
          <PagenotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
