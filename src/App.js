import './App.scss';
import {TeamDashboard} from './pages/TeamDashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TeamMatchesHistory } from './pages/TeamMatchesHistroy';

function App() {
  return (
    <div className="App">
      <h1> IPL - Dashboard</h1>
      <Router>
        <Switch>
          <Route path="/team/:name/matches/:year">
            <TeamMatchesHistory />
          </Route>
          <Route path="/team/:name">
            <TeamDashboard />
          </Route>
        </Switch>
      </Router>
    </div>   
  );
}
export default App;
