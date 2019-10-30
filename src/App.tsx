import React from 'react';
import { Route, Switch } from 'react-router';
import UpcomingPage from './pages/UpcomingPage';
import WatchListPage from './pages/WatchListPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={UpcomingPage} exact />
      <Route path="/upcoming" component={UpcomingPage} />
      <Route path="/watch" component={WatchListPage} />
    </Switch>
  );
}

export default App;
