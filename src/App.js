import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Apply from './components/Apply';

import './css/App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
				<Team path="/team" />
				<Projects path="/projects" />
				<Apply path="/apply" />
			</Router>
		</div>
	);
}

export default App;
