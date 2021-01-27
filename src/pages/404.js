import React from 'react';
import { Link } from '@reach/router';

import Logo from '../img/site-nav/logo-rainbow.png';

const Error404 = () => {
	return (
		<Link to="/">
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}
			>
				<img
					src={Logo}
					alt="Web Development at Berkeley"
					style={{ width: '20%', marginRight: '5rem' }}
				/>
				<div>
					<h1>404</h1>
					<p>Click anywhere to go back!</p>
				</div>
			</div>
		</Link>
	);
};

export default Error404;
