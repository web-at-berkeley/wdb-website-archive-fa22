import React from 'react';
import { Router } from '@reach/router';

import Landing from './pages/Landing';
import About from './pages/About';
import Education from './pages/Education';
import Development from './pages/Development';
import Partnerships from './pages/Partnerships';

import Members from './pages/Members';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Projects from './pages/Projects';
import Apply from './pages/Apply';
import Error404 from './pages/404';
import ErrorPage from './pages/Error';

import Resources from './pages/Resources';

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
