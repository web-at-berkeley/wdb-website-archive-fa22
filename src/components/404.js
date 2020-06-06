import React from 'react';
import { Link } from '@reach/router';

import ErrorImage from '../img/error.png';

const ErrorPage = () => {
	return (
		<Link to="/">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					// alignItems: 'center',
					// justifyContent: 'center',
					height: '100vh',
				}}
			>
				<img
					src={ErrorImage}
					alt="error"
					style={{ width: '50%', marginLeft: '1%', marginTop: '.5rem' }}
					className="selectDisable"
					draggable="false"
				/>
			</div>
		</Link>
	);
};

export default ErrorPage;
