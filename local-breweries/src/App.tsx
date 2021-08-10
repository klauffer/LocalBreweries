import React from 'react';
import './App.scss';
import { BreweriesSearchResults } from "./BreweriesSearchResults";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BreweriesSearchResults SearchTerm='harrisburg'/>
      </header>
    </div>
  );
}

export default App;
