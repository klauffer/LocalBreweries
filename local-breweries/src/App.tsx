import React from 'react';
import './App.scss';
import BreweriesSearch from './BreweriesSearch';
import { Switch, Route } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="App">
      <BreweriesSearch />
      <Switch>
        <Route exact path="/" component={BreweriesSearch} />
      </Switch>
    </div>
  );
}

export default App;
