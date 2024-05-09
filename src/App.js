import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/snack1" activeClassName="active">Snack 1</NavLink></li>
            <li><NavLink to="/snack2" activeClassName="active">Snack 2</NavLink></li>
            <li><NavLink to="/snack3" activeClassName="active">Snack 3</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route path="/snack1" component={Snack1} />
          <Route path="/snack2" component={Snack2} />
          <Route path="/snack3" component={Snack3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;