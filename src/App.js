import React from 'react';
import './utils/styles.scss'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home';
import ArmyDetails from './Pages/ArmyDetails';
import Battle from './Pages/Battle';
import BattleResult from './Pages/BattleResult';
import BattleHistory from './Pages/BattleHistory';

function App() {

  return <React.Fragment>
    <Router>
      <Route exact path='/' render={Home} />
      <Route exact path='/details' render={ArmyDetails} />
      <Route exact path='/battle' render={Battle} />
      <Route exact path='/result' render={BattleResult} />
      <Route exact path='/history' render={BattleHistory} />
    </Router>
  </React.Fragment>
}

export default App;
