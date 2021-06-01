import './App.css';
import {TeamDashboard} from './pages/TeamDashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> IPL - Dashboard</h1>
      <Router>
        <Route path="/team/:name">
          <TeamDashboard />
        </Route>
      </Router>
    </div>   
  );
}

export default App;
