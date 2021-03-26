import React from 'react';
import { Router } from '@reach/router';

import Landing from './pages/Landing/Landing';

import About from './pages/About/About';
import Education from './pages/About/Education';
import Development from './pages/About/Development';
import Partnerships from './pages/About/Partnerships';

import Team from './pages/Team/Team';
// import Members from './pages/Team/Members';
import Alumni from './pages/Team/Alumni';

import Projects from './pages/Projects/Projects';
import Apply from './pages/Apply/Apply';
import Error404 from './pages/Error/404';
import ErrorPage from './pages/Error/Error';
import Resources from './pages/Resources/Resources';

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
				<Alumni path="/team/alumni" />
				{/* <Members path="team/members" /> */}
				<Team path="/team/*" />
				<Projects path="/projects" />
				<Apply path="/apply" />
				<Resources path="/resources/:page" />
				<Resources path="/resources/" />
				<ErrorPage path="/error" />
				<Error404 default />
			</Router>
		</div>
	);
};

export default App;
