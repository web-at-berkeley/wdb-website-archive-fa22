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
import TeamMobile from './pages/mobile/TeamMobile';
import ErrorPage from './pages/404';

import './css/App.css';

function App() {
	const NotFound = ErrorPage;
	const team = matchMedia('(max-width: 640px)');
	let TeamPage = Team;
	let ApplyPage = Apply;
	if (team.matches) {
		TeamPage = TeamMobile;
	}
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
				<Education path="/about/education" />
				<Development path="/about/development" />
				<Partnerships path="/about/partnerships" />
				<TeamPage path="/team" />
				<Projects path="/projects" />
				<ApplyPage path="/apply" />
				<NotFound default />
			</Router>
		</div>
	);
}

export default App;
