import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import ScrollToTop from './ScrollToTop';

import Landing from './pages/landing';
import About from './pages/about';
import Initiatives from './pages/initiatives';
import Education from './pages/initiatives/education';
import Bootcamp from './pages/initiatives/bootcamp';
import Industry from './pages/initiatives/industry';
import Members from './pages/team/members';
import Alumni from './pages/team/alumni';
import Decal from './pages/decal';
import Projects from './pages/projects';
import Project from './pages/projects/project';
import WorkWithUs from './pages/work-with-us';
import Join from './pages/join';
import Error from './pages/error';

import './App.scss';

function App() {
	return (
		<Router>
			<ScrollToTop />
			
			<Switch>
				<Route exact path="/">
					<Navbar landing />
				</Route>
				<Route path="*">
					<Navbar />
				</Route>
			</Switch>

			<Switch>
				{/* About Us */}
				<Route path="/about">
					<About />
				</Route>

				{/* Initiatives */}
				<Route path="/education">
					<Education />
				</Route>
				<Route path="/bootcamp">
					<Bootcamp />
				</Route>
				<Route path="/industry">
					<Industry />
				</Route>
				<Route path="/initiatives">
					<Initiatives />
				</Route>

				{/* Members and Alumni */}
				{/* <Route path="/team">
					<Team />
				</Route> */}
				<Route path="/members">
					<Members />
				</Route>
				<Route path="/alumni">
					<Alumni />
				</Route>

				{/* DeCal */}
				<Route path="/decal">
					<Decal />
				</Route>

				{/* Projects */}
				<Route path="/projects/:id">
					<Project />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>

				{/* Work With Us */}
				<Route path="/work-with-us">
					<WorkWithUs />
				</Route>

				{/* Join Us */}
				<Route path="/join">
					<Join />
				</Route>

				{/* Landing Page */}
				<Route exact path="/">
					<Landing />
				</Route>

				{/* 404 no page found */}
				<Route path="*">
					<Error />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
