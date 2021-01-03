import './app.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/checkout'>
            <h1>checkout page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
