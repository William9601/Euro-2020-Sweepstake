import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className='app__container'>
        <Navbar />
        <Switch>
          <Route path='/user/:userid'>
            <Profile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
