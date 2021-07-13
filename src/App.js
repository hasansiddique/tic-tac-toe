import React from 'react';
import Grid from '@material-ui/core/Grid';

import Game from './game/Game';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ padding: 30 }}>
        <Grid container spacing={40}>
          <Game />
        </Grid>
      </div>
    </div>
  );
}

export default App;
