import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
// import Header from './component/nav/Header'



const App=()=> {
	return (
		<>
			{/* <Header /> */}
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</Switch>
		</>
	);
}



export default App
