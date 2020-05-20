import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import About from './components/About';
import Education from './components/Education';
import Development from './components/Development';
import Partnerships from './components/Partnerships';

import Team from './components/Team';
import Projects from './components/Projects';
import Apply from './components/Apply';
import ErrorPage from './components/404';

import './css/App.css';

function App() {
	const NotFound = ErrorPage;
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
				<NotFound default />
			</Router>
		</div>
	);
}

export default App;
