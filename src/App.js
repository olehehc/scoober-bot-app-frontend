import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import OpenShifts from './Pages/OpenShifts.js';
import Schedule from './Pages/Schedule.js';
import Salary from './Pages/Salary.js';
import Profile from './Pages/Profile.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/open-shifts" exact>
          <OpenShifts />
        </Route>
        <Route path="/schedule" exact>
          <Schedule />
        </Route>
        <Route path="/salary" exact>
          <Salary />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Redirect to="/open-shifts" />
      </Switch>
    </Router>
  );
};

export default App;
