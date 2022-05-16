import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/code/Home';
import About from './Components/code/About';
import Activity from './Components/code/Activity';
import Friends from './Components/code/Friends';
import Groups from './Components/code/Groups';
import Navbar from './Components/code/Navbar';
import Footer from './Components/code/Footer';

function App() {

	const [signed, set_signed] = useState(false);
	const [user, set_user] = useState();

	useEffect(() => {
		if (localStorage.getItem('splitwise_user') !== null) {
			set_user(JSON.parse(localStorage.getItem('splitwise_user')));
			set_signed(true);
		}
	}, [])

	const updateUser = (obj, login_req) => {
		if (login_req) {

			set_user(obj);
			localStorage.setItem("splitwise_user", JSON.stringify(obj))
			set_signed(true);
		}
		else {
			localStorage.removeItem("splitwise_user")
			set_signed(false);
			set_user([]);
		}
	}

	return (
		<div className="App">
			<Router>
				<Navbar signed={signed} updateUser={updateUser} user={user} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About signed={signed} />} />
					<Route exact path="/friends" element={<Friends signed={signed} />} />
					<Route exact path="/groups" element={<Groups signed={signed} />} />
					<Route exact path="/activity" element={<Activity signed={signed} />} />

				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
