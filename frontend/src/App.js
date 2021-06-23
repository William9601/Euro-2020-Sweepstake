import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<div className='app__container'>
				<Navbar />
				<Switch>
					<Route exact path='/user/:userid'>
						<Profile />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
