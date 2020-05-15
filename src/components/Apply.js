import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

const Apply = () => {
	return (
		<div className="apply">
			<SiteNavbar />
			<h2 style={{ color: 'black', padding: '19vh 10% 0 5%' }}>
				We are currently looking for both frontend and backend teachers, as well
				as Project managers. If you wish to be a part of our educational branch
				or development team, check back in fall 2020!
			</h2>
			<Footer />
		</div>
	);
};

export default Apply;
