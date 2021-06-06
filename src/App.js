import './App.scss';
import {TeamDashboard} from './pages/TeamDashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TeamMatchesHistory } from './pages/TeamMatchesHistroy';
import { HomePage } from './pages/HomePage';
import { Header } from './compoents/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <ul className ="Navigation-header">
                <li> <Header /> </li>
            </ul>
        </nav>
        <Switch>
          <Route path="/team/:name/matches/:year">
            <TeamMatchesHistory />
          </Route>
          <Route path="/team/:name">
            <TeamDashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>   
  );
}
export default App;
