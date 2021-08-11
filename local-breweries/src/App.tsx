import React from 'react';
import './App.scss';
import BreweriesSearch from './BreweriesSearch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BreweryDetails from './BreweryDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BreweriesSearch} />
          <Route exact path="/Brewery/:id" component={BreweryDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
