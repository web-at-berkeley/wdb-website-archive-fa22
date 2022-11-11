import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../components/footer';

import NavBar from '../components/NavBar';
import Landing from '../pages/landing';
import About from '../pages/about';
import Initiatives from '../pages/initiatives';
import Education from '../pages/initiatives/education';
import Bootcamp from '../pages/initiatives/bootcamp';
import Industry from '../pages/initiatives/industry';
import Members from '../pages/team/Members';
import Alumni from '../pages/team/Alumni';
import Decal from '../pages/decal';
import Projects from '../pages/projects';
import Project from '../pages/projects/project';
import WorkWithUs from '../pages/work-with-us';
import Join from '../pages/join';
import Error from '../pages/error';

import './App.scss';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<NavBar landing />} />
				<Route path="*" element={<NavBar />} />
			</Routes>

			<Routes>
				{/* About Us */}
				<Route path="/about" element={<About />} />

				{/* Initiatives */}
				<Route path="/education" element={<Education />} />
				<Route path="/bootcamp" element={<Bootcamp />} />
				<Route path="/industry" element={<Industry />} />
				<Route path="/initiatives" element={<Initiatives />} />

				{/* Members and Alumni */}
				<Route path="/members" element={<Members />} />
				<Route path="/alumni" element={<Alumni />} />

				{/* DeCal */}
				<Route path="/decal" element={<Decal />} />

				{/* Projects */}
				<Route path="/projects/:id" element={<Project />} />
				<Route path="/projects" element={<Projects />} />

				{/* Work With Us */}
				<Route path="/work-with-us" element={<WorkWithUs />} />

				{/* Join Us */}
				<Route path="/join" element={<Join />} />

				{/* Landing Page */}
				<Route path="/" element={<Landing />} />

				{/* 404 no page found */}
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
