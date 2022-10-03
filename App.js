import'./App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserLogin from './UserLogin';
import UserSignup from './form';
import Home from './Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/Login' element={<UserLogin />}></Route>
					<Route exact path='/signup' element={<UserSignup />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
