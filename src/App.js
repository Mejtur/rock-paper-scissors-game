import React from 'react';
import StartGame from './components/StartGame';
import Game from './components/Game';
import "./sass/main.scss";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch >
          <Route exact path="/">
            <StartGame />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
