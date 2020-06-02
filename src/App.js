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
import TeamMobile from './components/mobile/TeamMobile';
import ErrorPage from './components/404';

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
