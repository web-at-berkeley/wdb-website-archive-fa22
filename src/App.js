import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import About from './components/About';

import './css/App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
			</Router>
		</div>
	);
}

export default App;
