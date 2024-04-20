import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import OpenShifts from './Pages/OpenShifts.js';
import Schedule from './Pages/Schedule.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/schedule" exact>
          <Schedule />
        </Route>
        <Route path="/open-shifts" exact>
          <OpenShifts />
        </Route>
        <Redirect to="/schedule" />
      </Switch>
    </Router>
  );
};

export default App;
