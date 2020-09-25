import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="box--planet">
            Planet Name
        </div>
        <div className="box--population">
          POPULATION: 2000000
        </div>
        <div className="box--climate">
          CLIMATE: ARID
        </div>
        <div className="box--terrain">
          TERRAIN: DESERT
        </div>
        <div className="box--featured">
          FEATURED IN FILMS
        </div>
      </div>
    </div>
  );
}

export default App;