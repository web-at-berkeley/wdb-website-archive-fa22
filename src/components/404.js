import React from 'react';
import { Link } from '@reach/router';

const ErrorPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<h1 style={{ fontSize: '72px' }}>404</h1>
			<Link to="/">
				<p style={{ fontSize: '26px' }}>Return to Home</p>
			</Link>
		</div>
	);
};

export default ErrorPage;
