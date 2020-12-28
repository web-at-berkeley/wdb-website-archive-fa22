import React from 'react';
import { Router } from '@reach/router';

import Landing from './pages/Landing';
import About from './pages/About';
import Education from './pages/Education';
import Development from './pages/Development';
import Partnerships from './pages/Partnerships';

import Team from './pages/Team';
import Projects from './pages/Projects';
import Apply from './pages/Apply';
import ErrorPage from './pages/404';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
				<Education path="/about/education" />
				<Development path="/about/development" />
				<Partnerships path="/about/partnerships" />
				<Team path="/team" />
				<Projects path="/projects" />
				<Apply path="/apply" />
				<ErrorPage default />
			</Router>
		</div>
	);
};

export default App;
