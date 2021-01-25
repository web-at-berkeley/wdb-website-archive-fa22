import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/index.css';
import '../styles/app.css';

import '../styles/Landing.scss';
import '../styles/LandingNavbar.scss';

import '../styles/About.scss';
import '../styles/Team.scss';
import '../styles/Projects.scss';
import '../styles/Apply.scss';

import '../styles/AboutPages.scss';
import '../styles/Partnerships.scss';

import '../styles/Footer.scss';
import '../styles/SiteNavbar.scss';
import '../styles/TeamLevel.scss';
import '../styles/MemberModal.scss';
import '../styles/Contact.scss';
import '../styles/Project.scss';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
