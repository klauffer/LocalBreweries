import React from 'react';
import './App.scss';
import BreweriesSearch from './BreweriesSearch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BreweryDetails from './BreweryDetails';
import NavBar from './NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
    
    <BrowserRouter>
    <NavBar />
        <Switch>
          <Route exact path="/" component={BreweriesSearch} />
          <Route exact path="/Brewery/:id" component={BreweryDetails} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
