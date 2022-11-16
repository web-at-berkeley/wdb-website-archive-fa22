import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../components/Footer';

import NavBar from '../components/NavBar';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Initiatives from '../pages/Initiatives';
import Education from '../pages/Initiatives/education';
import Bootcamp from '../pages/Initiatives/bootcamp';
import Industry from '../pages/Initiatives/industry';
import Members from '../pages/Team/Members';
import Alumni from '../pages/Team/Alumni';
import Decal from '../pages/DeCal';
import Projects from '../pages/Projects';
import Project from '../pages/Projects/project';
import WorkWithUs from '../pages/Work-With-Us';
import Join from '../pages/Join';
import Error from '../pages/Error';

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
